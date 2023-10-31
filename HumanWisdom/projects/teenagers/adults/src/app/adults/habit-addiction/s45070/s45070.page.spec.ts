import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45070Page } from './s45070.page';

describe('S45070Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45070Page;
  let fixture: ComponentFixture<S45070Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45070Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45070Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
