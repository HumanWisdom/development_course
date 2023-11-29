import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132135Page } from './s132135.page';

describe('S132135Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132135Page;
  let fixture: ComponentFixture<S132135Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132135Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132135Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
