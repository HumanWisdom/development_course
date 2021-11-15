import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62083Page } from './s62083.page';

describe('S62083Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62083Page;
  let fixture: ComponentFixture<S62083Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62083Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62083Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
