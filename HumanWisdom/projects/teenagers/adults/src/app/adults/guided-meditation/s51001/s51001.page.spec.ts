import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S51001Page } from './s51001.page';

describe('S51001Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S51001Page;
  let fixture: ComponentFixture<S51001Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S51001Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S51001Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
