import { Component } from '@angular/core';

@Component({
  selector: 'app-recomendations',
  templateUrl: './recomendations.component.html',
  styleUrls: ['./recomendations.component.scss']
})
export class RecomendationsComponent {

  SkillsBtns: any[] = [
    {idSkill: 1, icon: 'attach_money', desc: '$23 / hour'},
    {idSkill: 2, icon: 'import_contacts', desc: '18 months training'},
    {idSkill: 3, icon: 'trending_up', desc: 'High demand'},
  ];

  bShowOtherRecomm = true;
}
