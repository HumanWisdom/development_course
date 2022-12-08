import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62172Page } from './s62172.page';

describe('S62172Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62172Page;
  let fixture: ComponentFixture<S62172Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62172Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62172Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
