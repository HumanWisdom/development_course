import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62097Page } from './s62097.page';

describe('S62097Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62097Page;
  let fixture: ComponentFixture<S62097Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62097Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62097Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
