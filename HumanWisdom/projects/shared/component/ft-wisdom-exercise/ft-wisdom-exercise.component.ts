import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ft-wisdom-exercise',
  templateUrl: './ft-wisdom-exercise.component.html',
  styleUrls: ['./ft-wisdom-exercise.component.scss'],
})
export class FtWisdomExerciseComponent {
  dayclass = 'intro'

  @Output()
  emitdayevent = new EventEmitter<any>()



  dayevent(day: string) {
    this.dayclass = day
    this.emitdayevent.emit(day)
  }

}
