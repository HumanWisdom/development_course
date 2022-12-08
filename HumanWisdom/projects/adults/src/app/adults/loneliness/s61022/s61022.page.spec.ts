import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61022Page } from './s61022.page';

describe('S61022Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61022Page;
  let fixture: ComponentFixture<S61022Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61022Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61022Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
