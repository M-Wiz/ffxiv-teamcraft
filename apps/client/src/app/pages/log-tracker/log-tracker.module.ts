import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogTrackerComponent } from './log-tracker/log-tracker.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../../core/core.module';
import { RouterModule, Routes } from '@angular/router';
import { MaintenanceGuard } from '../maintenance/maintenance.guard';
import { PipesModule } from '../../pipes/pipes.module';
import { ItemIconModule } from '../../modules/item-icon/item-icon.module';
import { ListPickerModule } from '../../modules/list-picker/list-picker.module';
import { ProgressPopupModule } from '../../modules/progress-popup/progress-popup.module';
import { MapPositionComponent } from '../../modules/map/map-position/map-position.component';
import { MapModule } from '../../modules/map/map.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'DoH',
    pathMatch: 'full'
  },
  {
    path: ':type',
    component: LogTrackerComponent,
    canActivate: [MaintenanceGuard]
  }
];

@NgModule({
  declarations: [LogTrackerComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    CoreModule,
    PipesModule,
    ItemIconModule,
    ListPickerModule,
    ProgressPopupModule,
    MapModule,
    RouterModule.forChild(routes),

    NgZorroAntdModule
  ]
})
export class LogTrackerModule {
}
