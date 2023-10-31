import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62140Page } from './s62140.page';

describe('S62140Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62140Page;
  let fixture: ComponentFixture<S62140Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62140Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62140Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
