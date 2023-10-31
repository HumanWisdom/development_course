import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45154Page } from './s45154.page';

describe('S45154Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45154Page;
  let fixture: ComponentFixture<S45154Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45154Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45154Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
