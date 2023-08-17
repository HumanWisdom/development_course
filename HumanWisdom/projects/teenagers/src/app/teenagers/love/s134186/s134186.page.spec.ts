import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134186Page } from './s134186.page';

describe('S134186Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134186Page;
  let fixture: ComponentFixture<S134186Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134186Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134186Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
