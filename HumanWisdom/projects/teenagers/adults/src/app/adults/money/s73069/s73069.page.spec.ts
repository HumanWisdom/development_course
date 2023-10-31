import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73069Page } from './s73069.page';

describe('S73069Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73069Page;
  let fixture: ComponentFixture<S73069Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73069Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73069Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
