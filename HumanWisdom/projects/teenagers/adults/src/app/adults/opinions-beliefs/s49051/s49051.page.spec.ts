import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49051Page } from './s49051.page';

describe('S49051Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49051Page;
  let fixture: ComponentFixture<S49051Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49051Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49051Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
