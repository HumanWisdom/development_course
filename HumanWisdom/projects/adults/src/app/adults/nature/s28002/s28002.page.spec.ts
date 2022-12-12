import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S28002Page } from './s28002.page';

describe('S28002Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S28002Page;
  let fixture: ComponentFixture<S28002Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S28002Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S28002Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
