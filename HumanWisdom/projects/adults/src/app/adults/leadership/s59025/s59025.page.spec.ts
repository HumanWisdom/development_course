import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59025Page } from './s59025.page';

describe('S59025Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59025Page;
  let fixture: ComponentFixture<S59025Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59025Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59025Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
