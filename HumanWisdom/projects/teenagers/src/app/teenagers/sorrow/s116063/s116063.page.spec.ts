import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116063Page } from './s116063.page';

describe('S116063Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S116063Page;
  let fixture: ComponentFixture<S116063Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116063Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116063Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
