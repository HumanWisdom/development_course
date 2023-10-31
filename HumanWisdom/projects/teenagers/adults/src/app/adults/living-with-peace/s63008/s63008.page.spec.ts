import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63008Page } from './s63008.page';

describe('S63008Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63008Page;
  let fixture: ComponentFixture<S63008Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63008Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63008Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
