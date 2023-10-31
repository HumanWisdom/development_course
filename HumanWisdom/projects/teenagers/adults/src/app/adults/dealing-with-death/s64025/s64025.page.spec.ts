import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64025Page } from './s64025.page';

describe('S64025Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64025Page;
  let fixture: ComponentFixture<S64025Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64025Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64025Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
