import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58040Page } from './s58040.page';

describe('S58040Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58040Page;
  let fixture: ComponentFixture<S58040Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58040Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58040Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
