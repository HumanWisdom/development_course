import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116091Page } from './s116091.page';

describe('S116091Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S116091Page;
  let fixture: ComponentFixture<S116091Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116091Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116091Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
