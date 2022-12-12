import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53087Page } from './s53087.page';

describe('S53087Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53087Page;
  let fixture: ComponentFixture<S53087Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53087Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53087Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
