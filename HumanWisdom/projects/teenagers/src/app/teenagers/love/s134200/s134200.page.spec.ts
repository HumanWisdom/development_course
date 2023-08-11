import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134200Page } from './s134200.page';

describe('S134200Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134200Page;
  let fixture: ComponentFixture<S134200Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134200Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134200Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
