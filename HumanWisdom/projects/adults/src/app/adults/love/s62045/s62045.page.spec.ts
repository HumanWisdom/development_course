import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62045Page } from './s62045.page';

describe('S62045Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62045Page;
  let fixture: ComponentFixture<S62045Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62045Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62045Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
