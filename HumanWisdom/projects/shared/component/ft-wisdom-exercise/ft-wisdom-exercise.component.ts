import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ft-wisdom-exercise',
  templateUrl: './ft-wisdom-exercise.component.html',
  styleUrls: ['./ft-wisdom-exercise.component.scss'],
})
export class FtWisdomExerciseComponent implements OnInit {
  dayclass = 'intro'

  @Output()
  emitdayevent = new EventEmitter<any>()

  constructor() { }

  ngOnInit() { }

  dayevent(day) {
    this.dayclass = day
    this.emitdayevent.emit(day)
  }

}
