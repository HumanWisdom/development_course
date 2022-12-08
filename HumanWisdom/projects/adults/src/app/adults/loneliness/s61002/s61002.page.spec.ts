import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61002Page } from './s61002.page';

describe('S61002Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61002Page;
  let fixture: ComponentFixture<S61002Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61002Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61002Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
