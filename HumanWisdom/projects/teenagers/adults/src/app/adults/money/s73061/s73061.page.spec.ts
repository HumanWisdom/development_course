import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73061Page } from './s73061.page';

describe('S73061Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73061Page;
  let fixture: ComponentFixture<S73061Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73061Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73061Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
