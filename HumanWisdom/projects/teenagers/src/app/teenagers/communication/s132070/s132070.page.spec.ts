import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132070Page } from './s132070.page';

describe('S132070Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132070Page;
  let fixture: ComponentFixture<S132070Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132070Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132070Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
