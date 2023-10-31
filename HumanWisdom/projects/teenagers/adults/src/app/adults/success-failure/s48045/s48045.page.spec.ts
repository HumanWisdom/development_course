import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48045Page } from './s48045.page';

describe('S48045Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48045Page;
  let fixture: ComponentFixture<S48045Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48045Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48045Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
