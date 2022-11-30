import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60040Page } from './s60040.page';

describe('S60040Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60040Page;
  let fixture: ComponentFixture<S60040Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60040Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60040Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
