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
      
  });
  it('Should confirm the page and naviagte through pages', () => {
    cy
      .scrollTo('bottom')
      .url().should('contain', 'nkw=football')
      // naviagte to page 3 and validate
      .get(itemsPage.pagination).eq(2).click()
      .url().should('contain', 'pgn=3')
      // naviagte to page 5 and validate
      .get(itemsPage.pagination).eq(4).click()
      .url().should('contain', 'pgn=5')
  });
})