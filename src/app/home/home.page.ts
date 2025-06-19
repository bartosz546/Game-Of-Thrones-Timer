import {ChangeDetectorRef, Component, ViewChild} from '@angular/core';
import {CdkDrag, CdkDragDrop, CdkDragPlaceholder, CdkDropList, moveItemInArray} from '@angular/cdk/drag-drop';
import {HouseLogo} from "../HouseLogo";
import {CdTimerComponent} from "angular-cd-timer";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  @ViewChild('timer', {static: false}) timer!: CdTimerComponent;

  public currentHouseIndex = 0;
  public readonly INITIAL_COUNTDOWN_TIME = 240;

  config = {
    format: "mm:ss"
  }

  constructor(private cdr: ChangeDetectorRef) {
  }

  houses = [
    new HouseLogo("Baratheon"),
    new HouseLogo("Lannister"),
    new HouseLogo("Targaryen"),
    new HouseLogo("Stark"),
    new HouseLogo("Greyjoy"),
    new HouseLogo("Martell"),
    new HouseLogo("Tyrell"),
    new HouseLogo("Arryn"),
    new HouseLogo("Tully"),
  ];

  goToNext() {
    this.currentHouseIndex++;
    if (this.currentHouseIndex > this.houses.length) {
      this.currentHouseIndex = 0;
    }
    this.cdr.detectChanges();
  }

  decreaseTime() {
    this.timer.startTime = this.timer.startTime - 60;
    if(this.timer.startTime <= 0) {
      this.timer.startTime = 60;
    }
    this.timer.reset();
    this.timer.start();
  }

  increaseTime() {
    this.timer.startTime = this.timer.startTime + 60;
    this.timer.reset();
    this.timer.start();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.houses, event.previousIndex, event.currentIndex);
    this.currentHouseIndex = 0;
    this.timer.reset();
    this.timer.start();
  }
}
