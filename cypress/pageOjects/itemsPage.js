export default class ItemPage {
  constructor() {
    this.priceOfItem = '.s-item__price'
    this.buyItNow = '[class="s-item__detail s-item__detail--primary"]'
    this.postagePrice = '[class="item__shipping s-item__logisticsCost"]'
    this.bestMatchBtn =  '[class="srp-sort"]'
    this.lowestPrice = '[id="s0-14-11-5-1[0]-37-0-content-menu"]'
    this.categoryItem = '[class="srp-refine__category__item"]'
    this.pagination = '.pagination__item'
    this.buyNowtab = '.srp-format-tabs-h2'
    this.menuBtnItem = '.fake-menu-button__item'
  }

  filterLowPrice() {
    cy
      .get(this.lowestPrice).children()
      .eq(4).click({ force: true })
  }
  filterHighPrice() {
    cy
      .get(this.lowestPrice).children()
      .eq(3).click({ force: true })
  }

  page3() {
    cy 
      .get(itemsPage.pagination).eq(2).click()
      .url().should('contain', 'pgn=3')
  }
  
  page4() {
    cy
      .get(itemsPage.pagination).eq(4).click()
      .url().should('contain', 'pgn=5')
  }
}
