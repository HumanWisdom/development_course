import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134210Page } from './s134210.page';

describe('S134210Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134210Page;
  let fixture: ComponentFixture<S134210Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134210Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134210Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
