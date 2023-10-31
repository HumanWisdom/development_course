import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53141Page } from './s53141.page';

describe('S53141Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53141Page;
  let fixture: ComponentFixture<S53141Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53141Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53141Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
