import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S25028Page } from './s25028.page';

describe('S25028Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S25028Page;
  let fixture: ComponentFixture<S25028Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S25028Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S25028Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
