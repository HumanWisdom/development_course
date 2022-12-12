import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60076Page } from './s60076.page';

describe('S60076Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60076Page;
  let fixture: ComponentFixture<S60076Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60076Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60076Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
