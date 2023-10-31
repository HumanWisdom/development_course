import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58067Page } from './s58067.page';

describe('S58067Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58067Page;
  let fixture: ComponentFixture<S58067Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58067Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58067Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
