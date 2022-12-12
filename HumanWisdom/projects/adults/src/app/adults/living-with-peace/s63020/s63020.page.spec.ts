import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63020Page } from './s63020.page';

describe('S63020Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63020Page;
  let fixture: ComponentFixture<S63020Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63020Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63020Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
