import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53160Page } from './s53160.page';

describe('S53160Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53160Page;
  let fixture: ComponentFixture<S53160Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53160Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53160Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
