import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49058Page } from './s49058.page';

describe('S49058Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49058Page;
  let fixture: ComponentFixture<S49058Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49058Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49058Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
