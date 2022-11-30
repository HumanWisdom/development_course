import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63013Page } from './s63013.page';

describe('S63013Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63013Page;
  let fixture: ComponentFixture<S63013Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63013Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63013Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
