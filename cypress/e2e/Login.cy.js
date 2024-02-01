import login_page from "../PageObjectModle/login_page"
const login_page_obj = new login_page()
describe('Login user with valid data', () => {
    before(() => {
        // Load environment variables before each test
        cy.loadEnvVariables();
    });
    it('Login user successfully', () => {
        const apiUrl = Cypress.env('API_URL');
        cy.visit(apiUrl)

        cy.login_app();
        cy.fixture('login_data.json').then(txt => {
        login_page_obj.condition.should('have.text', txt.Text)
        })
    })
})
