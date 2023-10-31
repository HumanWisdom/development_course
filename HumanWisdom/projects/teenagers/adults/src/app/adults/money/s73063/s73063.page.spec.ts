import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73063Page } from './s73063.page';

describe('S73063Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73063Page;
  let fixture: ComponentFixture<S73063Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73063Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73063Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
