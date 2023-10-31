import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S36000Page } from './s36000.page';

describe('S36000Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S36000Page;
  let fixture: ComponentFixture<S36000Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S36000Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S36000Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
