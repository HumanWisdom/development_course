import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62130Page } from './s62130.page';

describe('S62130Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62130Page;
  let fixture: ComponentFixture<S62130Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62130Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62130Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
