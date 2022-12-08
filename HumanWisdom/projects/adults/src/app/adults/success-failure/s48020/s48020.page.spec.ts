import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48020Page } from './s48020.page';

describe('S48020Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48020Page;
  let fixture: ComponentFixture<S48020Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48020Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48020Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
