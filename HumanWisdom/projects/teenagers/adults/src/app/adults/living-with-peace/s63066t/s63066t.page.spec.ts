import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63066tPage } from './s63066t.page';

describe('S63066tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63066tPage;
  let fixture: ComponentFixture<S63066tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63066tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63066tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
