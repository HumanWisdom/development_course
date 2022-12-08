import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62158Page } from './s62158.page';

describe('S62158Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62158Page;
  let fixture: ComponentFixture<S62158Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62158Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62158Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
