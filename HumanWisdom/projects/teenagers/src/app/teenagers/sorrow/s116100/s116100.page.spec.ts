import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116100Page } from './s116100.page';

describe('S116100Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S116100Page;
  let fixture: ComponentFixture<S116100Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116100Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116100Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
