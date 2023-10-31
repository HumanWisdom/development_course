import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49034Page } from './s49034.page';

describe('S49034Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49034Page;
  let fixture: ComponentFixture<S49034Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49034Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49034Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
