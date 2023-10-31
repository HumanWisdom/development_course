import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61091Page } from './s61091.page';

describe('S61091Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61091Page;
  let fixture: ComponentFixture<S61091Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61091Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61091Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
