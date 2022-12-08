import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53201Page } from './s53201.page';

describe('S53201Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53201Page;
  let fixture: ComponentFixture<S53201Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53201Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53201Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
