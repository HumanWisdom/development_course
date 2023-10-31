import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49061Page } from './s49061.page';

describe('S49061Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49061Page;
  let fixture: ComponentFixture<S49061Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49061Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49061Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
