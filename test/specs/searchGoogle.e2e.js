import SearchPage from  '../../search.page';
import SearchResultsPage from '../../searchResults.page';

describe('Google Search', () => {
    it('I should be able to make a google search ', async () => {
        let term = "Tomate"
        await SearchPage.open();
        await SearchPage.search(term);
        await expect(SearchResultsPage.listOfResults).toBeExisting();         
        await SearchResultsPage.validateForm(term)  
    });
});


