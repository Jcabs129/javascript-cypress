import ItemsPage from '../../pageOjects/itemsPage';
import Homepage from '../../pageOjects/homePage';


const itemsPage = new ItemsPage();
const homePage = new Homepage();

describe('Should search for the item and select a category', () => {
  beforeEach(() => {
    cy
      homePage.visitWeb()
      homePage.inputData()
      homePage.clickSearch()
  })
// https://docs.cypress.io/api/commands/eq.html#Syntax
  it('Land on the search item page and select a category', () => {
    cy
      .get(itemsPage.categoryItem).eq(5).click()
      // add validation
      cy.url().should('contain', 'nkw=football')

  })
})


