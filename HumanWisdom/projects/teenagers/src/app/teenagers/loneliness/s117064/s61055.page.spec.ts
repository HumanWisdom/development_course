import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61175Page } from './s61175.page';

describe('S61175Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61175Page;
  let fixture: ComponentFixture<S61175Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61175Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61175Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
