import { InvestmentData } from './investment-data.model';
import { FormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { UserInputComponent } from './user-input/user-input.component';

@NgModule({
  declarations:[
    AppComponent,
    HeaderComponent,
    UserInputComponent,
    InvestmentResultsComponent
  ],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule{

}