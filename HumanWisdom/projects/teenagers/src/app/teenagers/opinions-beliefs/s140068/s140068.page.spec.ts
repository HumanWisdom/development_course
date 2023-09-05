import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140068Page } from './s140068.page';

describe('S140068Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140068Page;
  let fixture: ComponentFixture<S140068Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140068Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140068Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
