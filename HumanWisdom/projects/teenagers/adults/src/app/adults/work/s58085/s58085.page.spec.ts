import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58085Page } from './s58085.page';

describe('S58085Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58085Page;
  let fixture: ComponentFixture<S58085Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58085Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58085Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
