import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63058Page } from './s63058.page';

describe('S63058Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63058Page;
  let fixture: ComponentFixture<S63058Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63058Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63058Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
