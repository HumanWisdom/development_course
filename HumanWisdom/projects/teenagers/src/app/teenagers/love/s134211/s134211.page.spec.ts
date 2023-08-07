import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134211Page } from './s134211.page';

describe('S134211Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134211Page;
  let fixture: ComponentFixture<S134211Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134211Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134211Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
