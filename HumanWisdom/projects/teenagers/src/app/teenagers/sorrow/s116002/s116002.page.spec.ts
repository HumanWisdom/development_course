import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116002Page } from './s116002.page';

describe('S116002Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S116002Page;
  let fixture: ComponentFixture<S116002Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116002Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116002Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
