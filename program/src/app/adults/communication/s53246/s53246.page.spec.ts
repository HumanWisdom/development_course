import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53246Page } from './s53246.page';

describe('S53246Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53246Page;
  let fixture: ComponentFixture<S53246Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53246Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53246Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
