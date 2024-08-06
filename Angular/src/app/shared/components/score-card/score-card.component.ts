import { Component, OnInit } from "@angular/core";
import { ApiService } from '../../../services/services/api.service';

@Component({
  selector: "app-score-card",
  templateUrl: "./score-card.component.html",
  styleUrls: ["./score-card.component.scss"],
})
export class ScoreCardComponent implements OnInit {
  jobs: { 
    name: string;
    score: number;
    wage: number;
    training: number;
    //Modificar cuando este el verdadero caso de la demanda
    demand: 'null' | 'NLJ/ETP' | 'CHE'; 
  }[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.apiService.getData().subscribe((data: any[]) => {
      this.jobs = data.map(item => ({
        name: item.recommended_soc_title,
        score: item.recommendation_score,
        wage: item.mean_quarterly_wage_hourly,
        training: item.training_success_rate,
        demand: this.mapDemand(item.training_type), 
      }));
    });
  }

  //Modificar cuando este el verdadero caso de la demanda
  mapDemand(demand: string | null): 'null' | 'NLJ/ETP' | 'CHE' {
    if (demand === null) return 'null';
    switch (demand) {
      case 'NLJ/ETP': return 'NLJ/ETP';
      case 'CHE': return 'CHE';
      default: return 'null'; 
    }
  }
}

