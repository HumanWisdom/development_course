import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AudioBulletComponent } from './audio-bullet.component';

describe('AudioBulletComponent', () => {
  let component: AudioBulletComponent;
  let fixture: ComponentFixture<AudioBulletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudioBulletComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AudioBulletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
