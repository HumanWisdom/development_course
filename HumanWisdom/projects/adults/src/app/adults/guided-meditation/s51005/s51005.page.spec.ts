import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S51005Page } from './s51005.page';

describe('S51005Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S51005Page;
  let fixture: ComponentFixture<S51005Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S51005Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S51005Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
