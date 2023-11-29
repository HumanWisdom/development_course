import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132082Page } from './s132082.page';

describe('S132082Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132082Page;
  let fixture: ComponentFixture<S132082Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132082Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132082Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
