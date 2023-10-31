import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73025Page } from './s73025.page';

describe('S73025Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73025Page;
  let fixture: ComponentFixture<S73025Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73025Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73025Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
