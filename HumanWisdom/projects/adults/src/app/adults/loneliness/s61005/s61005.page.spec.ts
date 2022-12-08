import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61005Page } from './s61005.page';

describe('S61005Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61005Page;
  let fixture: ComponentFixture<S61005Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61005Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61005Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
