import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S55056Page } from './s55056.page';

describe('S55056Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S55056Page;
  let fixture: ComponentFixture<S55056Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S55056Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S55056Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
