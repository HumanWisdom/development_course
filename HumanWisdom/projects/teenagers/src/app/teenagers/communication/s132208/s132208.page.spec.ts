import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132208Page } from './s132208.page';

describe('S132208Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132208Page;
  let fixture: ComponentFixture<S132208Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132208Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132208Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
