import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48024Page } from './s48024.page';

describe('S48024Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48024Page;
  let fixture: ComponentFixture<S48024Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48024Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48024Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
