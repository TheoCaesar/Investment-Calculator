import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { UserModule } from "./user-input/user.module";

@NgModule({
  declarations:[
    AppComponent,
    HeaderComponent,
    InvestmentResultsComponent
  ],
  imports: [BrowserModule, UserModule ],
  bootstrap: [AppComponent]
})
export class AppModule{

}