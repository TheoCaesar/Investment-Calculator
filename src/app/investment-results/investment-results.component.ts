import { Component, inject, } from '@angular/core';
import { InvestmentService } from '../investment.service';
@Component({
  selector: 'app-investment-results',
  standalone: false,
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  private investService = inject(InvestmentService)

  get results() {{
    //get service property storing results post execution
    return this.investService.resultsData.asReadonly();
  }}
}
