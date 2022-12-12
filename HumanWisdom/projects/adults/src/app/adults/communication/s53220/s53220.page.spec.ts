import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53220Page } from './s53220.page';

describe('S53220Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53220Page;
  let fixture: ComponentFixture<S53220Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53220Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53220Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
