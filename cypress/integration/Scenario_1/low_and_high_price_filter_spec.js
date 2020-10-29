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
  it('Locate drop-down list "Lowest price" , and click/filter LOWEST price Should also validate top 3 LOWEST price item on list/sorting order', () => {
    cy
        .wait(1000)
        .get(itemsPage.bestMatchBtn).click()
        itemsPage.filterLowPrice()
    cy
        // validate first title
        .get(itemsPage.itemTitleList).eq(0).contains('Arsenal Football Shirt PUMA Home Shirt 2014/15')
        // validate first price
        .get(itemsPage.priceOfItem).eq(0).contains('£0.01')
        // validate second title
        .get(itemsPage.itemTitleList).eq(1).contains('Everton Football Jacket Tracksuit')
        // validate second price
        .get(itemsPage.priceOfItem).eq(1).contains('£0.01')
  })
  it('Locate drop-down list "Highest price" , and click/filter. Should also validate top 3 HIGHEST price item on list/sorting order', () => {
    cy
       .get(itemsPage.bestMatchBtn).click()
       itemsPage.filterHighPrice()
    cy
       // validate first title
      .get(itemsPage.itemTitleList).eq(0).contains('2017 Patrick Mahomes SUPER COLLECTION')
      // validate first price
      .get(itemsPage.priceOfItem).eq(0).contains('£5,771,006.46')
      // validate second title
      .get(itemsPage.itemTitleList).eq(1).contains('Esports.football Esport.football')
      // validate second price
      .get(itemsPage.priceOfItem).eq(1).contains('£250,000.00')
       
   })
 })

