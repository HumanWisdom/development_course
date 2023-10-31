import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48073Page } from './s48073.page';

describe('S48073Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48073Page;
  let fixture: ComponentFixture<S48073Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48073Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48073Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
