import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53115Page } from './s53115.page';

describe('S53115Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53115Page;
  let fixture: ComponentFixture<S53115Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53115Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53115Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
