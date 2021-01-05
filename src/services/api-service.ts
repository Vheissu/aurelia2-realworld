import { HttpClient } from '@aurelia/fetch-client';
 
export class ApiService {
    private http = new HttpClient();

    async loadQuotes(count: number) {
        const request = await this.http.fetch(`https://breaking-bad-quotes.herokuapp.com/v1/quotes/${count}`);
        
        return request.json();
    }
}