import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73020Page } from './s73020.page';

describe('S73020Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73020Page;
  let fixture: ComponentFixture<S73020Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73020Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73020Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
