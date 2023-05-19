import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61001Page } from './s61001.page';

describe('S61001Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61001Page;
  let fixture: ComponentFixture<S61001Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61001Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61001Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
