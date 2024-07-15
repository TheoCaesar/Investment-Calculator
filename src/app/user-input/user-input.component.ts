import { Component, output, signal } from '@angular/core';
import { type InvestmentData } from '../investment-data.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initialInvestment = signal("0") //type inference
  annualInvestment = signal("0")
  expectedReturn = signal("5")
  duration = signal("10")

  constructor(private investService: InvestmentService){}

  onSubmit(){
    //trigger method in service
    this.investService.calculateInvestmentResults({
      initialInvestment : +this.initialInvestment(),
      annualInvestment: +this.annualInvestment(),
      expectedReturn: +this.expectedReturn(),
      duration: +this.duration()
    });

    //form reset
    this.initialInvestment.set('0');
    this.annualInvestment.set("0");
    this.expectedReturn.set("5");
    this.duration.set("10")
  }
}
