import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49002Page } from './s49002.page';

describe('S49002Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49002Page;
  let fixture: ComponentFixture<S49002Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49002Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49002Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
