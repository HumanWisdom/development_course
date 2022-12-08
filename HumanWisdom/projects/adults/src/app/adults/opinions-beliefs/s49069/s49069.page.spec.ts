import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49069Page } from './s49069.page';

describe('S49069Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49069Page;
  let fixture: ComponentFixture<S49069Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49069Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49069Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
