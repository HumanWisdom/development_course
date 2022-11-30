import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S55025Page } from './s55025.page';

describe('S55025Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S55025Page;
  let fixture: ComponentFixture<S55025Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S55025Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S55025Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
