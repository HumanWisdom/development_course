import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63054Page } from './s63054.page';

describe('S63054Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63054Page;
  let fixture: ComponentFixture<S63054Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63054Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63054Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
