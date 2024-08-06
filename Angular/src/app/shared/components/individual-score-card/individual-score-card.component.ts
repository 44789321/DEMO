import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-individual-score-card',
  templateUrl: './individual-score-card.component.html',
  styleUrls: ['./individual-score-card.component.scss']
})
export class IndividualScoreCardComponent {
  @Input() name: string = '';
  @Input() score: number = 0;
  bars: number[] = Array(10).fill(0);

  getBarClass(index: number): string {
    if (this.score < 4) {
      return index < Math.round(this.score) ? 'filled-red' : 'empty';
    } else if (this.score < 8) {
      return index < Math.round(this.score) ? 'filled-yellow' : 'empty';
    } else {
      return index < Math.round(this.score) ? 'filled-blue' : 'empty';
    }
  }
}
