import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73086Page } from './s73086.page';

describe('S73086Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73086Page;
  let fixture: ComponentFixture<S73086Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73086Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73086Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
