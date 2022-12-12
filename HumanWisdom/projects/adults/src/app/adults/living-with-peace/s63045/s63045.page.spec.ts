import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63045Page } from './s63045.page';

describe('S63045Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63045Page;
  let fixture: ComponentFixture<S63045Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63045Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63045Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
