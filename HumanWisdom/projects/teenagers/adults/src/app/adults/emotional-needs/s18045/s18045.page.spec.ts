import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18045Page } from './s18045.page';

describe('S18045Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18045Page;
  let fixture: ComponentFixture<S18045Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18045Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18045Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
