import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61083Page } from './s61083.page';

describe('S61083Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61083Page;
  let fixture: ComponentFixture<S61083Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61083Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61083Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
