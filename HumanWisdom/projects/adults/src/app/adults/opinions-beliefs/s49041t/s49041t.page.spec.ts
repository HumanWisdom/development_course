import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49041tPage } from './s49041t.page';

describe('S49041tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49041tPage;
  let fixture: ComponentFixture<S49041tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49041tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49041tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
