import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48104Page } from './s48104.page';

describe('S48104Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48104Page;
  let fixture: ComponentFixture<S48104Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48104Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48104Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
