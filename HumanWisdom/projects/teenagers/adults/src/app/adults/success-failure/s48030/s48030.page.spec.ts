import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48030Page } from './s48030.page';

describe('S48030Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48030Page;
  let fixture: ComponentFixture<S48030Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48030Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48030Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
