import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134176Page } from './s134176.page';

describe('S134176Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134176Page;
  let fixture: ComponentFixture<S134176Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134176Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134176Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
