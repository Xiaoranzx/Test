describe('Jobs ', () =>{
  beforeEach(() => {
      cy.visit('https://software-tester-exam-mwo7646q6a-an.a.run.app/junior/login')
      cy.get('#input-12').type("admin@pdkm.tech")
      cy.get("#input-15").type("yahooWowZaa")
      cy.get("#app > div > main > div > div > div > div > div.logo.py-4.d-flex.justify-center.v-card.v-sheet.theme--light > div > div:nth-child(4) > button").click()
      cy.visit('https://software-tester-exam-mwo7646q6a-an.a.run.app/junior/home')
      cy.wait(2000)
      cy.get('#input-22').type("Pitchaphorn")
      cy.get('#input-26').type("Xiaoranzz")
      cy.get('#input-30').type("test123@test.com")
      cy.get('#input-34').type("0987654321")
    })
    it('Jobs Page', () => {
      cy.get("#app > div > main > div > div.container > div.row.justify-center > div > form > button").click()
      cy.get("#app > div > main > div > div.container > div.row.justify-center > div > form > button").click()
      cy.get("#input-40").click()
      cy.get(".v-responsive__content").click()
      cy.get(".v-messages__message").should('be.visible');
      cy.get("#input-40").type("Super Junior")
      cy.get(".v-messages__message").should('be.visible');
      cy.get("#input-40").clear()
      cy.wait(1000)
      cy.get("#list-item-107-2 > div").click()
      cy.get("#input-46").click()
      cy.get(".v-responsive__content").click()
      cy.get(".v-messages__message").should('be.visible');
      cy.get("#input-46").type("pdkm1")
      cy.get("#input-51").click()
      cy.wait(1000)
      cy.get("#app > div:nth-child(8) > div > div > div.v-picker__actions.v-card__actions > button:nth-child(2) > span").click()
      
      //cy.get("#app > div.v-dialog__content.v-dialog__content--active > div > div > div.v-picker__actions.v-card__actions > button:nth-child(2)").click()
      ///cy.get("#input-51").click()


      //cy.get("#app > div.v-dialog__content.v-dialog__content--active > div > div > div.v-picker__body.theme--light > div > div.v-date-picker-header.theme--light > div > div > button").click()
      
      //cy.get("#app > div.v-dialog__content.v-dialog__content--active > div > div > div.v-picker__body.theme--light > div > ul > li:nth-child(101)").click()
      //cy.get("#app > div.v-dialog__content.v-dialog__content--active > div > div > div.v-picker__body.theme--light > div > div.v-date-picker-table.v-date-picker-table--month.theme--light > table > tbody > tr:nth-child(1) > td:nth-child(3) > button > div").click()
      



      // cy.get("#app > div.v-overlay.v-overlay--active.theme--dark > div.v-overlay__scrim").click()
      //cy.get("#app > div.v-dialog__content.v-dialog__content--active > div > div > div.v-picker__body.theme--light > div > div.v-date-picker-table.v-date-picker-table--month.theme--light > table > tbody > tr:nth-child(4) > td:nth-child(2) > button").click()
      ///cy.wait(1000)
      //cy.get('#app > div.v-dialog__content.v-dialog__content--active').trigger('click', {force: true});
      //cy.get("#app > div.v-overlay.v-overlay--active.theme--dark > div.v-overlay__scrim").clickOutSide()
      //cy.wait(2000)
  
      //cy.get("#app > div.v-dialog__content > div > div > div.v-picker__actions.v-card__actions > button:nth-child(3) > span").click()
      // cy.get("#input-51").click()
      // cy.get("#app > div.v-dialog__content.v-dialog__content--active > div > div > div.v-picker__actions.v-card__actions > button:nth-child(2) > span").click()
      
    })
    
})