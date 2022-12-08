import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18086Page } from './s18086.page';

describe('S18086Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18086Page;
  let fixture: ComponentFixture<S18086Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18086Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18086Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
