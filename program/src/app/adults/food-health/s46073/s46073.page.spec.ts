import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46073Page } from './s46073.page';

describe('S46073Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46073Page;
  let fixture: ComponentFixture<S46073Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46073Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46073Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
