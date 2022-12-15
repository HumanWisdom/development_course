import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S30001Page } from './s30001.page';

describe('S30001Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S30001Page;
  let fixture: ComponentFixture<S30001Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S30001Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S30001Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
