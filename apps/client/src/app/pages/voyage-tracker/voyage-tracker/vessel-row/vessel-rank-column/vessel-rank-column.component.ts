import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FreeCompanyWorkshopFacade } from '../../../../../modules/free-company-workshops/+state/free-company-workshop.facade';
import { observeInput } from '../../../../../core/rxjs/observe-input';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-vessel-rank-column',
  templateUrl: './vessel-rank-column.component.html',
  styleUrls: ['./vessel-rank-column.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VesselRankColumnComponent {
  @Input() rank: number;

  @Input() currentExperience: number;

  currentExperience$ = observeInput(this, 'currentExperience');

  @Input() totalExperienceForNextRank: number;

  totalExperienceForNextRank$ = observeInput(this, 'totalExperienceForNextRank');

  @Input() maxRank: number;

  constructor(private freeCompanyWorkshopFacade: FreeCompanyWorkshopFacade) {
  }

  rankupPercent$ = combineLatest([this.currentExperience$, this.totalExperienceForNextRank$]).pipe(
    map(([current, nextRank]) => {
      return Math.round(100 * (current / nextRank));
    })
  )
}
