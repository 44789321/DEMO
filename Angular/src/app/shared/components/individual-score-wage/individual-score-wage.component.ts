import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-individual-score-wage',
  templateUrl: './individual-score-wage.component.html',
  styleUrls: ['./individual-score-wage.component.scss']
})
export class IndividualScoreWageComponent {
  @Input() wage: number = 0;

  getProgressWidth(): number {
    const maxWage = 20;
    return (this.wage / maxWage) * 100;
  }
}
