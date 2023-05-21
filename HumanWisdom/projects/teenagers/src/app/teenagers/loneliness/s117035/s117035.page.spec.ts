import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117035Page } from './s117035.page';

describe('S117035Page', () => {
  // let   
    let component:  S117035Page;
  let fixture: ComponentFixture<S117035Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117035Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117035Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
