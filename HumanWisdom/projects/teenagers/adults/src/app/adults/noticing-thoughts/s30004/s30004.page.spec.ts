import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S30004Page } from './s30004.page';

describe('S30004Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S30004Page;
  let fixture: ComponentFixture<S30004Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S30004Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S30004Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
