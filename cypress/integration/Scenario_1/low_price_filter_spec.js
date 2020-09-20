import ItemsPage from '../../pageOjects/itemsPage';
import Homepage from '../../pageOjects/homePage';

const itemsPage = new ItemsPage();
const homePage = new Homepage();

describe('Should display and sort Lowest price when clicked', () => {
  beforeEach(() => {
    cy
      homePage.visitWeb()
      homePage.inputData()
      homePage.clickSearch()
  })
  // https://docs.cypress.io/api/commands/children.html#No-Args
  it('', () => {
   cy
      .get(itemsPage.bestMatchBtn).click()
      .get('.fake-menu-button__item').children()
      
      // .get('.fake-menu-button__item').eq(4).click()
      // Validation
      
  })
})