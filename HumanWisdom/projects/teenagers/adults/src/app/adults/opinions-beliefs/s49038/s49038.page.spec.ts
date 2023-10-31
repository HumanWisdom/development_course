import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49038Page } from './s49038.page';

describe('S49038Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49038Page;
  let fixture: ComponentFixture<S49038Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49038Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49038Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
