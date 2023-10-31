import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73087Page } from './s73087.page';

describe('S73087Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73087Page;
  let fixture: ComponentFixture<S73087Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73087Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73087Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
