import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58032Page } from './s58032.page';

describe('S58032Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58032Page;
  let fixture: ComponentFixture<S58032Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58032Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58032Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
