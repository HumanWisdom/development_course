import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53028Page } from './s53028.page';

describe('S53028Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53028Page;
  let fixture: ComponentFixture<S53028Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53028Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53028Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
