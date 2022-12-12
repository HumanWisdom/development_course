import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57069Page } from './s57069.page';

describe('S57069Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57069Page;
  let fixture: ComponentFixture<S57069Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57069Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57069Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
