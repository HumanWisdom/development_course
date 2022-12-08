import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60037Page } from './s60037.page';

describe('S60037Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60037Page;
  let fixture: ComponentFixture<S60037Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60037Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60037Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
