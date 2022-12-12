import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63028Page } from './s63028.page';

describe('S63028Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63028Page;
  let fixture: ComponentFixture<S63028Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63028Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63028Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
