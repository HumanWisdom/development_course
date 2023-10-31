import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58001Page } from './s58001.page';

describe('S58001Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58001Page;
  let fixture: ComponentFixture<S58001Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58001Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58001Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
