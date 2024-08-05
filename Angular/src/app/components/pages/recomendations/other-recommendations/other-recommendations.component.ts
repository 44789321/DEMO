import { Component } from '@angular/core';

@Component({
  selector: 'app-other-recommendations',
  templateUrl: './other-recommendations.component.html',
  styleUrls: ['./other-recommendations.component.scss']
})
export class OtherRecommendationsComponent {

  sorters: any[] = [
    {id: 1, desc:'Recommendations score'},
    {id: 2, desc:'Publish date'},
    {id: 3, desc:'Demand'},
    {id: 4, desc:'Salary'},
  ];
}
