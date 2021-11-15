import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62005Page } from './s62005.page';

describe('S62005Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62005Page;
  let fixture: ComponentFixture<S62005Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62005Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62005Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
