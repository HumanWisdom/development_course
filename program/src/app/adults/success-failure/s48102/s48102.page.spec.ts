import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48102Page } from './s48102.page';

describe('S48102Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48102Page;
  let fixture: ComponentFixture<S48102Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48102Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48102Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
