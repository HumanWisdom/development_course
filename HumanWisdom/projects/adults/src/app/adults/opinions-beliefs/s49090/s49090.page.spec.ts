import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49090Page } from './s49090.page';

describe('S49090Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49090Page;
  let fixture: ComponentFixture<S49090Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49090Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49090Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
