import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132002Page } from './s132002.page';

describe('S132002Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132002Page;
  let fixture: ComponentFixture<S132002Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132002Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132002Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
