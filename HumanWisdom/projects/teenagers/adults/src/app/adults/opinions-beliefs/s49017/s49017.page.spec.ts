import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49017Page } from './s49017.page';

describe('S49017Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49017Page;
  let fixture: ComponentFixture<S49017Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49017Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49017Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
