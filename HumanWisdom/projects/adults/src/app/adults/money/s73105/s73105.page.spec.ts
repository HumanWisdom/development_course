import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73105Page } from './s73105.page';

describe('S73105Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73105Page;
  let fixture: ComponentFixture<S73105Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73105Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73105Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
