import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48100Page } from './s48100.page';

describe('S48100Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48100Page;
  let fixture: ComponentFixture<S48100Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48100Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48100Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
