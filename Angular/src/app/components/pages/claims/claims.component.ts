import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MainService } from 'src/app/services/services/main.service';
import { Resultado } from 'src/app/shared/models/general.model';

@Component({
  selector: 'app-claims',
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.scss']
})
export class ClaimsComponent implements OnInit {

  claims: any = [];

  constructor(
    private _mainSvc: MainService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getClaims();
  }

  getClaims = async () => {
    (await this._mainSvc.getClaims()).subscribe((resp: Resultado) => {
      if (resp.Exito === 'true') {
        this.claims = resp.Data;
      } else {
        this.toastr.error('Failed to load claims.');
      }
    }, error => {
      this.toastr.error('An error occurred while fetching claims.');
    });
  }
}
