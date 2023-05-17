import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116081Page } from './s116081.page';

describe('S116081Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S116081Page;
  let fixture: ComponentFixture<S116081Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116081Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116081Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
