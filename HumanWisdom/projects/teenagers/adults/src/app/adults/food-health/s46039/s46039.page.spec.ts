import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46039Page } from './s46039.page';

describe('S46039Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46039Page;
  let fixture: ComponentFixture<S46039Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46039Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46039Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
