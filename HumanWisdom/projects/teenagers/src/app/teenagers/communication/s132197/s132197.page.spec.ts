import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53196Page } from './s132197.page';

describe('S53196Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53196Page;
  let fixture: ComponentFixture<S53196Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53196Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53196Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
