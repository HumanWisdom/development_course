import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140079Page } from './s140079.page';

describe('S140079Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140079Page;
  let fixture: ComponentFixture<S140079Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140079Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140079Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
