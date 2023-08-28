import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140048Page } from './s140048.page';

describe('S140048Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140048Page;
  let fixture: ComponentFixture<S140048Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140048Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140048Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
