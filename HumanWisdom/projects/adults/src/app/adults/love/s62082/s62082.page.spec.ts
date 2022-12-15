import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62082Page } from './s62082.page';

describe('S62082Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62082Page;
  let fixture: ComponentFixture<S62082Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62082Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62082Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
