const { I } = inject();

module.exports = {
  
  filters: 'div[class="FiltersPanel_body__2hOhz"]',
  noProductsFoundLegend: '//*[contains(text(),"no products found")]',

  resultsAreListed(){
    I.waitForVisible(this.filters, 10)
    I.seeElement(this.filters)
  },

  resultsAreNotListed(){
    I.dontSeeElement(this.filters)
  },

  noProductsFound(){
    I.waitForVisible(this.noProductsFoundLegend, 10)
    I.seeElement(this.noProductsFoundLegend)
  }
}
