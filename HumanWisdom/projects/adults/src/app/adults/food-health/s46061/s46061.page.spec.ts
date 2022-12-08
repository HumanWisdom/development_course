import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46061Page } from './s46061.page';

describe('S46061Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46061Page;
  let fixture: ComponentFixture<S46061Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46061Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46061Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
