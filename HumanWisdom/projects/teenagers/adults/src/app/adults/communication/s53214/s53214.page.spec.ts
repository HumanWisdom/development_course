import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53214Page } from './s53214.page';

describe('S53214Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53214Page;
  let fixture: ComponentFixture<S53214Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53214Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53214Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
