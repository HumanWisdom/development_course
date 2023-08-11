import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134158Page } from './s134158.page';

describe('S134158Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134158Page;
  let fixture: ComponentFixture<S134158Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134158Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134158Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
