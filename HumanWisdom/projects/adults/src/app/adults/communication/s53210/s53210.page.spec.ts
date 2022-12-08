import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53210Page } from './s53210.page';

describe('S53210Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53210Page;
  let fixture: ComponentFixture<S53210Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53210Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53210Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
