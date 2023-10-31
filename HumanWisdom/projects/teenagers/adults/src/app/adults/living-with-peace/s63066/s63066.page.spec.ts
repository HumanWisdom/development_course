import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63066Page } from './s63066.page';

describe('S63066Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63066Page;
  let fixture: ComponentFixture<S63066Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63066Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63066Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
