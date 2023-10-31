import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18025Page } from './s18025.page';

describe('S18025Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18025Page;
  let fixture: ComponentFixture<S18025Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18025Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18025Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
