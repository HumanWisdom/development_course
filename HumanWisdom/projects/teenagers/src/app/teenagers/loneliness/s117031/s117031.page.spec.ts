import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117031Page } from './s117031.page';

describe('S117031Page', () => {
  // let   
    let component:  S117031Page;
  let fixture: ComponentFixture<S117031Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117031Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117031Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
