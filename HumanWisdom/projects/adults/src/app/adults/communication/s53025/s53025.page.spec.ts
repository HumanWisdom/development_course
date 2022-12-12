import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53025Page } from './s53025.page';

describe('S53025Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53025Page;
  let fixture: ComponentFixture<S53025Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53025Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53025Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
