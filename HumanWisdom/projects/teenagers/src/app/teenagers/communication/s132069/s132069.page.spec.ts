import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132069Page } from './s132069.page';

describe('S132069Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132069Page;
  let fixture: ComponentFixture<S132069Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132069Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132069Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
