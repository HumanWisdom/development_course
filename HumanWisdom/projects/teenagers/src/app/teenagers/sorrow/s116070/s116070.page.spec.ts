import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116070Page } from './s116070.page';

describe('S116070Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S116070Page;
  let fixture: ComponentFixture<S116070Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116070Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116070Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
