import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45040Page } from './s45040.page';

describe('S45040Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45040Page;
  let fixture: ComponentFixture<S45040Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45040Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45040Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
