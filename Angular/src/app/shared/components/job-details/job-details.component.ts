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

  constructor(private aRoute: ActivatedRoute,
    private toastr: ToastrService,
    private _mainSvc: MainService,
    private router: Router
  ) {
    this.idJob = String(this.aRoute.snapshot.paramMap.get('id'));
  }

  neOnInit() {
    // this.getJobDetails();
  }

  getJobDetails() {
    this._mainSvc.getJobDetails(this.idJob).subscribe((resp: any) => {
      if (resp.Exito == 'true')
        this.jobDetail = resp.Data[0];
    });
  }

  handleBack() {
    this.router.navigate(['/recommendations'])
  }

}
