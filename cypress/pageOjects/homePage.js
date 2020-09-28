 export default class Homepage {
  constructor() {
    this.search = '[id="gh-ac-box2"]'
    this.btnSearch = '[id="gh-btn"]'
    this.cookieBanBtn = '[id="gdpr-banner-accept"]'
    this.categoryItem = '[class="srp-refine__category__item srp-refine__category__item--breadcrumb-root"]'
  }

  visitWeb(){
    cy
      .visit('https://www.ebay.co.uk')
 }

  inputData(){
    cy
      .get(this.search).type('football')
 }

  clickSearch(){
    cy
      .get(this.btnSearch).click() 
 }
}