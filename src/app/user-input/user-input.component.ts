import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type InvestmentData } from '../investment-data.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initialInvestment = signal("0") //type inference
  annualInvestment = signal("0")
  expectedReturn = signal("5")
  duration = signal("10")
  @Output() calculate = new EventEmitter<InvestmentData>()

  onSubmit(){
    const userInvestment: InvestmentData = {
      initialInvestment : +this.initialInvestment(),
      annualInvestment: +this.annualInvestment(),
      expectedReturn: +this.expectedReturn(),
      duration: +this.duration()
    }
    this.calculate.emit(userInvestment);

    //form reset
    this.initialInvestment.set('0');
    this.annualInvestment.set("0");
    this.expectedReturn.set("5");
    this.duration.set("10")
  }
}
