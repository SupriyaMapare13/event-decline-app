/*import { Injectable } from '@angular/core';
//import { MsalService } from "@azure/msal-angular"; "3.0.0-alpha.0";
import { MsalService } from "@azure/msal-browser"; "3.0.0-alpha.0";


@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private msalService: MsalService) { }

    getAccessToken(): Promise<string> {
        return new Promise((resolve, reject) => {
            this.msalService.acquireTokenSilent({
                scopes: ['https://org72bf785b.crm8.dynamics.com/.default'],
            }).then(response => {
                resolve(response.accessToken);
            }).catch(error => {
                reject(error);
            });
        });
    }
}
*/