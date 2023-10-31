import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61061Page } from './s61061.page';

describe('S61061Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61061Page;
  let fixture: ComponentFixture<S61061Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61061Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61061Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
