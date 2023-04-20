import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S103001Page } from './s103001.page';

describe('S103001Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S103001Page;
  let fixture: ComponentFixture<S103001Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S103001Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S103001Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
