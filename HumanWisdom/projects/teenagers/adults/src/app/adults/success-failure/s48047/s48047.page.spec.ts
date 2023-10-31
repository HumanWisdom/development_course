import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48047Page } from './s48047.page';

describe('S48047Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48047Page;
  let fixture: ComponentFixture<S48047Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48047Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48047Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
