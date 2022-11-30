import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49030Page } from './s49030.page';

describe('S49030Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49030Page;
  let fixture: ComponentFixture<S49030Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49030Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49030Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
