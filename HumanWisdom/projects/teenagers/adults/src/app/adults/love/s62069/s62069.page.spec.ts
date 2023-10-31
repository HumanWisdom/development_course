import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62069Page } from './s62069.page';

describe('S62069Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62069Page;
  let fixture: ComponentFixture<S62069Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62069Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62069Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
