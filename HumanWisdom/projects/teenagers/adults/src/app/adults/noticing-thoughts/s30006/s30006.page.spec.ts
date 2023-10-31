import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S30006Page } from './s30006.page';

describe('S30006Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S30006Page;
  let fixture: ComponentFixture<S30006Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S30006Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S30006Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
