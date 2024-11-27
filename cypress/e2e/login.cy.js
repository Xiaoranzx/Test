describe('Login', () => {
  it('login  page', () => {
    cy.visit('https://software-tester-exam-mwo7646q6a-an.a.run.app/junior/login')
    cy.get('#input-12').click()
    cy.get(".v-responsive__content").click()
    cy.get(".v-messages__message").should('be.visible');
    cy.get('#input-15').click()
    cy.get(".v-responsive__content").click()
    cy.get(".v-messages__message").should('be.visible');
    cy.get("#app > div > main > div > div > div > div > div.logo.py-4.d-flex.justify-center.v-card.v-sheet.theme--light > div > div:nth-child(4) > button").click()
    cy.wait(2000)
    cy.get(".red--text").should('be.visible'); 
  })
  it('login fail', () => {
    cy.visit('https://software-tester-exam-mwo7646q6a-an.a.run.app/junior/login')
    cy.get('#input-12').type("test@test.com")
    cy.get("#input-15").type("1234")
    cy.get("#app > div > main > div > div > div > div > div.logo.py-4.d-flex.justify-center.v-card.v-sheet.theme--light > div > div:nth-child(4) > button").click()
    cy.wait(2000)
    cy.get(".red--text").should('be.visible');
  })
  it('login success', () => {
    cy.visit('https://software-tester-exam-mwo7646q6a-an.a.run.app/junior/login')
    cy.get('#input-12').type("admin@pdkm.tech")
    cy.get("#input-15").type("yahooWowZaa")
    cy.get("#app > div > main > div > div > div > div > div.logo.py-4.d-flex.justify-center.v-card.v-sheet.theme--light > div > div:nth-child(4) > button").click()
    cy.wait(2000)
    cy.url().should('eq', 'https://software-tester-exam-mwo7646q6a-an.a.run.app/junior/home')
    }) 
  })
  
  

