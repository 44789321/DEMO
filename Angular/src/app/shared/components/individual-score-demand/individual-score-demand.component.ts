import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-individual-score-demand",
  templateUrl: "./individual-score-demand.component.html",
  styleUrls: ["./individual-score-demand.component.scss"],
})
export class IndividualScoreDemandComponent implements OnChanges {
  @Input() demand: "Low demand" | "High demand" | "Medium demand" = "Low demand";
  bars: number[] = [0, 0, 0];

  ngOnChanges(changes: SimpleChanges) {
    if (changes["demand"]) {
      this.updateBars();
    }
  }

  updateBars() {
    switch (this.demand) {
      case "High demand":
        this.bars = [1, 1, 1];
        break;
      // Este caso será implementado cuando la base de datos sea modificada
      /*
      case "Medium demand":
        this.bars = [1, 1, 0];
        break;
      */
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
