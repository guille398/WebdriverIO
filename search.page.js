

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchPage extends Page {
    /**
     * define selectors using getter methods
     */
    get searchbox () {
        return $("input[name='q']");
    }

    get searchbutton () {
        return $("input[name='btnK']");
    }    

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async search (searchTerm) {
        await this.searchbox.setValue(searchTerm);       
        await this.searchbutton.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}

export default new SearchPage();
