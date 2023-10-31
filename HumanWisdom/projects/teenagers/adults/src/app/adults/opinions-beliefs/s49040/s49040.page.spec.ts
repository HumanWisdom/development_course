import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49040Page } from './s49040.page';

describe('S49040Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49040Page;
  let fixture: ComponentFixture<S49040Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49040Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49040Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
