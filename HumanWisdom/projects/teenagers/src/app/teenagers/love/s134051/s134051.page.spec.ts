import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134051Page } from './s134051.page';

describe('S134051Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134051Page;
  let fixture: ComponentFixture<S134051Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134051Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134051Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
