import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141025Page } from './s141025.page';

describe('S141025Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141025Page;
  let fixture: ComponentFixture<S141025Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141025Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141025Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
