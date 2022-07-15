

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchResultsPage extends Page {
    /**
     * define selectors using getter methods
     */
    get listOfResults () {
        return $$('#rso > div > div > div > div > div > a > h3');
    }  
    /**
     * This function iterate in results to validate the search
     * @param {} term 
     */
    async validateForm(term){
        this.listOfResults.forEach(element => {
            expect(element.getText().toLowerCase()).to.contain(term.toLowerCase())
        })        
    }    
}

export default new SearchResultsPage();
