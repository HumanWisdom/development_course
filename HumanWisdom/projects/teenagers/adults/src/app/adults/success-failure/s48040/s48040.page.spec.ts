import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48040Page } from './s48040.page';

describe('S48040Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48040Page;
  let fixture: ComponentFixture<S48040Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48040Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48040Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
