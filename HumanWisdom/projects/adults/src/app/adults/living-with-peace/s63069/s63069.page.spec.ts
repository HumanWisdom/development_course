import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63069Page } from './s63069.page';

describe('S63069Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63069Page;
  let fixture: ComponentFixture<S63069Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63069Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63069Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
