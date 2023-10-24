import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-day-exercise',
  templateUrl: './day-exercise.component.html',
  styleUrls: ['./day-exercise.component.scss'],
})
export class DayExerciseComponent implements OnInit {
  @Input() vistedScreens = [];
  @Input() currentDay :any;
  @Input() nextDay:any;
  @Output() GetDayEvent  =new EventEmitter<any>();
  constructor() { }

  ngOnInit() {}
  getClass(day) {
    var dayclass = "";
    var className = "";
    if (day === "75002p0") {
      dayclass = "0";
    } else if (day === "75002p1") {
      dayclass = "1";
    } else if (day === "75002p2") {
      dayclass = "2";
    } else if (day === "75002p3") {
      dayclass = "3";
    } else if (day === "75002p4") {
      dayclass = "4";
    } else if (day === "75002p5") {
      dayclass = "5";
    }

    if (this.currentDay.toString() == dayclass) {
      className += "editable ";
    }
    if (this.vistedScreens.some((x) => x.ScreenNo == day)) {
      className += "uneditable";
    }
    if (this.nextDay == +dayclass) {
      className = "editable active";
    }
    if (this.vistedScreens.some((x) => x.ScreenNo != day)) {
      className += "inactive";
    }
    return className;
  }

  getdayevent(event) {
    this.GetDayEvent.emit(event);
  }
}
