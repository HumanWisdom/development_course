import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134061Page } from './s134061.page';

describe('S134061Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134061Page;
  let fixture: ComponentFixture<S134061Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134061Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134061Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
