import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-individual-score-card',
  templateUrl: './individual-score-card.component.html',
  styleUrls: ['./individual-score-card.component.scss']
})
export class IndividualScoreCardComponent {

  @Input() name: string = '';
  @Input() score: number = 0;
  @Input() route: string = '';
  bars: number[] = Array(10).fill(0);

  constructor(private router: Router) { }

  getBarClass(index: number): string {
    if (this.score < 4) {
      return index < Math.round(this.score) ? 'filled-red' : 'empty';
    } else if (this.score < 8) {
      return index < Math.round(this.score) ? 'filled-yellow' : 'empty';
    } else {
      return index < Math.round(this.score) ? 'filled-blue' : 'empty';
    }
  }

  handlRoute() {
    if (this.route)
      this.router.navigate([this.route]);
  }

  formatToTwoDecimals(value: number): string {
    return Number(value).toFixed(0);
  }
}
