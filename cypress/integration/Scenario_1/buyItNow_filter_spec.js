import ItemsPage from '../../pageOjects/itemsPage';
import Homepage from '../../pageOjects/homePage';


const itemsPage = new ItemsPage();
const homePage = new Homepage();

describe('Should be able to filter the results by Buy it now', () => {
  beforeEach(() => {
    cy
      homePage.visitWeb()
      homePage.inputData()
      homePage.clickSearch()
  })
  it('should be able to navigate to buy it now view and confirm', () => {
    cy
      .get(itemsPage.buyNowtab).eq(3).click()
      // url validation
      .url().should('contain', 'BIN=1')
  })
})