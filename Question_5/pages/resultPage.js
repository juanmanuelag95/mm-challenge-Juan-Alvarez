const { I } = inject();

module.exports = {
  
  filters: 'div[class="FiltersPanel_body__2hOhz"]',

  resultsAreListed(){
    I.waitForVisible(this.filters, 10)
    I.seeElement(this.filters)
  },
}
