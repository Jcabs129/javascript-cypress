import ItemsPage from '../../pageOjects/itemsPage';
import Homepage from '../../pageOjects/homePage';

const itemsPage = new ItemsPage();
const homePage = new Homepage();

describe('Search and verify results', () => {
  beforeEach(() => {
    cy
      homePage.visitWeb()
      homePage.inputData()
      homePage.clickSearch()
  });
  it('Should click on search and confirm the next page as expected', () => {
    cy
      .wait(1000)
      .url().should('contain', 'nkw=football')
      // .get(homePage.abcSearchBtn).click()
  })
  it('Should Confirm the items card show;  price and show BuyItNow tag', () => {
    cy
      .get(itemsPage.priceOfItem).should('exist')
      .get(itemsPage.buyItNow).should('exist')
  })
  // validation
  it('This Should fail to confirm that priceOfItem should exist', () => {
    cy
      .get(itemsPage.priceOfItem).should('not.exist')
  })
})