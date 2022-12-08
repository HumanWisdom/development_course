import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60022Page } from './s60022.page';

describe('S60022Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60022Page;
  let fixture: ComponentFixture<S60022Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60022Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60022Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
