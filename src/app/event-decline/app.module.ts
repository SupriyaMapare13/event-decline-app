/* import { MSALInterceptor } from '@azure/msal-angular';
import { MsalService, MsalModule, MsalInterceptor } from '@azure/msal-angular';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        MsalModule
    ],
    providers: [
        MsalService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: MsalInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
*/