import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62061Page } from './s62061.page';

describe('S62061Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62061Page;
  let fixture: ComponentFixture<S62061Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62061Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62061Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
