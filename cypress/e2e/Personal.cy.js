describe('Personal ', () =>{
  beforeEach(() => {
      cy.visit('https://software-tester-exam-mwo7646q6a-an.a.run.app/junior/login')
      cy.get('#input-12').type("admin@pdkm.tech")
      cy.get("#input-15").type("yahooWowZaa")
      cy.get("#app > div > main > div > div > div > div > div.logo.py-4.d-flex.justify-center.v-card.v-sheet.theme--light > div > div:nth-child(4) > button").click()
  })
    it("Personal Page", ()=> {
      cy.visit('https://software-tester-exam-mwo7646q6a-an.a.run.app/junior/home')
      cy.wait(2000)
      cy.get("#input-22").click()
      cy.get(".v-responsive__content").click()
      cy.get(".v-messages__message").should('be.visible');
      cy.get("#input-26").click()
      cy.get(".v-responsive__content").click()
      cy.get(".v-messages__message").should('be.visible');
      cy.get("#input-30").click()
      cy.get(".v-responsive__content").click()
      cy.get(".v-messages__message").should('be.visible');
      cy.get("#input-34").click()
      cy.get(".v-responsive__content").click()
      cy.get(".v-messages__message").should('be.visible');
    })
    it('Personal', () => {
      cy.visit('https://software-tester-exam-mwo7646q6a-an.a.run.app/junior/home')
      cy.wait(2000)
      cy.get("#input-22").click()
      cy.get(".v-responsive__content").click()
      cy.get('#input-22').type("Pitchaphorn")
      cy.wait(2000)
      cy.get("#input-26").click()
      cy.get(".v-responsive__content").click()
      cy.get('#input-26').type("Xiaoranzz")
      cy.wait(2000)
      cy.get("#input-30").click()
      cy.get(".v-responsive__content").click()
      cy.get('#input-30').type("test123")
      cy.get('#input-30').clear()
      cy.get('#input-30').type("test123@test.com")
      cy.wait(2000)
      cy.get("#input-34").click()
      cy.get(".v-responsive__content").click()
      cy.get('#input-34').type("12345")
      cy.get('#input-34').clear()
      cy.get('#input-34').type("1234567890000000")
      cy.get('#input-34').clear()
      cy.get('#input-34').type("0987654321")
    })

  
    
  })  
   