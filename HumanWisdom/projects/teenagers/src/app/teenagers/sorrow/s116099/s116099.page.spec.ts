import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116099Page } from './s116099.page';

describe('S116099Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S116099Page;
  let fixture: ComponentFixture<S116099Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116099Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116099Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
