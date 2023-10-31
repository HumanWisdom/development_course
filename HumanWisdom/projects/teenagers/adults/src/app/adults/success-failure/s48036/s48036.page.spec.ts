import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48036Page } from './s48036.page';

describe('S48036Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48036Page;
  let fixture: ComponentFixture<S48036Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48036Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48036Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
