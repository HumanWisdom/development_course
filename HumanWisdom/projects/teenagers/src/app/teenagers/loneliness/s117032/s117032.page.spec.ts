import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61028Page } from './s117032.page';

describe('S61028Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61028Page;
  let fixture: ComponentFixture<S61028Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61028Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61028Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
