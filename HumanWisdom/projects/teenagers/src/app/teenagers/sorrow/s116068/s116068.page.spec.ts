import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116068Page } from './s116068.page';

describe('S116068Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S116068Page;
  let fixture: ComponentFixture<S116068Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116068Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116068Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
