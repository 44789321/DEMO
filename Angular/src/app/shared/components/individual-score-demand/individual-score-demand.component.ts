import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-individual-score-demand",
  templateUrl: "./individual-score-demand.component.html",
  styleUrls: ["./individual-score-demand.component.scss"],
})
export class IndividualScoreDemandComponent implements OnChanges {

  @Input() name: string = '';
  @Input() demand: any; // "null" | "NLJ/ETP" | "CHE" = "null";
  bars: number[] = [0, 0, 0];

  ngOnChanges(changes: SimpleChanges) {
    if (changes["demand"]) {
      this.updateBars();
    }
  }

  updateBars() {
    switch (this.demand.toUpperCase()) {
      //Caso de HIGH
      case "CHE": case 'HIGH DEMAND':
        this.bars = [1, 1, 1];
        break;
      //Caso de medio
      case "NLJ/ETP":  case 'MODERATE DEMAND':
        this.bars = [1, 1, 0];
        break;
      case "Low demand":
      default:
        this.bars = [1, 0, 0];
        break;
    }
  }

  getBarClass(index: number): string {
    return this.bars[index] ? "filled-blue" : "empty";
  }
}
