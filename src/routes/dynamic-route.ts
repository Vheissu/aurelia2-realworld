import { ApiService } from './../services/api-service';
import { IRouteableComponent } from '@aurelia/router';

export class DynamicRoute implements IRouteableComponent {
    private quotes = [];

    constructor(private api: ApiService) {

    }

    // Moving the async inline removes the flicking/changing of the URL's, but you lose the cleanliness of the code below
    // load() {
    //     (async () => {
    //         this.quotes = await this.api.loadQuotes(10);
    //     })();
    // }

    async load() {
        this.quotes = await this.api.loadQuotes(10);
    }
}