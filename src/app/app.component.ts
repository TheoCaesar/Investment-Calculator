import { HeaderComponent } from './header/header.component';
import { Component } from '@angular/core';
import { UserInputComponent } from './user-input/user-input.component';

export interface investmentData {
  initialInvestment: number
  annualInvestment: number
  expectedReturn: number
  duration: number
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,UserInputComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  calculateInvestmentResults(data: investmentData) {
    const {initialInvestment, annualInvestment, expectedReturn, duration} = data;
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    return annualData;
  }
}
