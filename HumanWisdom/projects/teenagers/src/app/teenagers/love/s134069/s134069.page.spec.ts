import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134069Page } from './s134069.page';

describe('S134069Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134069Page;
  let fixture: ComponentFixture<S134069Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134069Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134069Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
