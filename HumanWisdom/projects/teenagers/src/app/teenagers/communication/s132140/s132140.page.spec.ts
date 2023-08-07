import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132140Page } from './s132140.page';

describe('S132140Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132140Page;
  let fixture: ComponentFixture<S132140Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132140Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132140Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
