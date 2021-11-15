import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62087Page } from './s62087.page';

describe('S62087Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62087Page;
  let fixture: ComponentFixture<S62087Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62087Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62087Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
