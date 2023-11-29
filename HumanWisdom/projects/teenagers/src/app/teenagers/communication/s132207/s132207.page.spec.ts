import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132207Page } from './s132207.page';

describe('S132207Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132207Page;
  let fixture: ComponentFixture<S132207Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132207Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132207Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
