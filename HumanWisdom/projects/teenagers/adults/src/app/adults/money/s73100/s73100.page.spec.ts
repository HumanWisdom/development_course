import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73100Page } from './s73100.page';

describe('S73100Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73100Page;
  let fixture: ComponentFixture<S73100Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73100Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73100Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
