import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116001Page } from './s116001.page';

describe('S116001Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S116001Page;
  let fixture: ComponentFixture<S116001Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116001Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116001Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
