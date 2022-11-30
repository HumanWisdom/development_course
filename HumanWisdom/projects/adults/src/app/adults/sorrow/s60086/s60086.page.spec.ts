import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60086Page } from './s60086.page';

describe('S60086Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60086Page;
  let fixture: ComponentFixture<S60086Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60086Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60086Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
