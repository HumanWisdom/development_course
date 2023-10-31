import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46029Page } from './s46029.page';

describe('S46029Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46029Page;
  let fixture: ComponentFixture<S46029Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46029Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46029Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
