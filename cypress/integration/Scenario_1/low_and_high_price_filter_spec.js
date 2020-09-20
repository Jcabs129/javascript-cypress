import ItemsPage from '../../pageOjects/itemsPage';
import Homepage from '../../pageOjects/homePage';

const itemsPage = new ItemsPage();
const homePage = new Homepage();

describe('Should display and sort Lowest and highest price when clicked', () => {
  beforeEach(() => {
    cy
      homePage.visitWeb()
      homePage.inputData()
      homePage.clickSearch()
  })
  it('Locate drop-down list best match , and click/filter LOWEST price', () => {
   cy
      .get(itemsPage.bestMatchBtn).click()
      itemsPage.filterLowPrice()
  })
  it('Locate drop-down list best match , and click/filter HIGHEST price', () => {
    cy
       .get(itemsPage.bestMatchBtn).click()
       itemsPage.filterHighPrice()       
   })
 })



// .get(itemsPage.bestMatchBtn).click()
// .get('[id="s0-14-11-5-1[0]-37-0-content-menu"]').children()
// .eq(3).click({ force: true })
