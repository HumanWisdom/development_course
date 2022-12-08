import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48002Page } from './s48002.page';

describe('S48002Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48002Page;
  let fixture: ComponentFixture<S48002Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48002Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48002Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
