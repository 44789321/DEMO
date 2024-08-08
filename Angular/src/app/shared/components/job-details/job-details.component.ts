import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MainService } from 'src/app/services/services/main.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent {

  idJob = '';
  jobDetail: any = {
    title: 'Logistician',
    description: `Logisticians oversee the process of moving goods from production to consumption. 
    They strategize and manage the flow of materials, ensuring that products reach their destination efficiently and cost-effectively. 
    Logisticians play a crucial role in coordinating transportation, storage, and distribution, all aimed at optimizing the supply chain and 
    meeting customer demands. They utilize a range of tools and technologies to streamline operations and maximize efficiency across various industries.`
  };
  scoreCard: any = {
    "glb_id": 9042013,
    "education_level": 3,
    "county_fips": 18097,
    "rural_urban_score": 3,
    "previous_soc_code": 411011,
    "previous_soc_title": "First-Line Supervisors of Retail Sales Workers",
    "previous_soc_category": "Sales and Related Occupations",
    "recommended_soc_code": 414011,
    "recommended_soc_title": "Sales Representatives, Wholesale and Manufacturing, Technical and Scientific Products",
    "recommended_soc_category": "Sales and Related Occupations",
    "recommendation_rank_revised": 23,
    "recommendation_score": 10,
    "recommendation_demand": "High demand",
    "mean_quarterly_wage_hourly": 23,
    "training_type": "CHE",
    "program_id": null,
    "program_degree_level": "Award of at least 1 but less than 2 academic years",
    "program_name": "Undergraduate Certificate in Professional Sales ",
    "program_length_weeks": 18,
    "training_success_rate": 0.82,
    "create_timestamp": {
      "value": "2024-04-01T19:49:36.939314000Z"
    }
  };

  constructor(private aRoute: ActivatedRoute,
    private toastr: ToastrService,
    private _mainSvc: MainService,
    private router: Router
  ) {
    this.idJob = String(this.aRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    this.getJobDetails();
  }

  getJobDetails() {
    this._mainSvc.getJobDetails(this.idJob).subscribe((resp: any) => {
      if (resp.Exito == 'true') {
        this.scoreCard = resp.Data[0];
        this.jobDetail.title = this.scoreCard.recommended_soc_title;
      }
    });
  }

  handleBack() {
    this.router.navigate(['/recommendations']);
  }

  handleReady() {
    this.router.navigate([`/jobs/${this.idJob}/ready`]);
  }

}
