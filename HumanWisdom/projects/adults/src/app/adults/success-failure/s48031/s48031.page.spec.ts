import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48031Page } from './s48031.page';

describe('S48031Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48031Page;
  let fixture: ComponentFixture<S48031Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48031Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48031Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
