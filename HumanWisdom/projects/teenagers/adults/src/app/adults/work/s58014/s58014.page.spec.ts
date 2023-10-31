import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58014Page } from './s58014.page';

describe('S58014Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58014Page;
  let fixture: ComponentFixture<S58014Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58014Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58014Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
