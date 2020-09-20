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
  it('Should confirm the page and naviagte through page', () => {
    cy
      // .get('.s-page no-touch skin-large srp--list-view no-touch skin-large gh-1199 gh-979 gh-939 gh-flex').scrollTo('bottom')
      .scrollTo('bottom')
      .url().should('contain', 'nkw=football')
      .get(itemsPage.pagination).eq(2).click()
      .url().should('contain', 'pgn=3')
  })
})