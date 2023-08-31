import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140041tPage } from './s140041t.page';

describe('S140041tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140041tPage;
  let fixture: ComponentFixture<S140041tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140041tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140041tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
