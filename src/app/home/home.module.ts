import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {CdkDrag, CdkDropList} from "@angular/cdk/drag-drop";
import {CountdownComponent} from "ngx-countdown";
import {CdTimerModule} from "angular-cd-timer";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    CdkDropList,
    CdkDrag,
    CountdownComponent,
    CdTimerModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
