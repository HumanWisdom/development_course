import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53174Page } from './s53174.page';

describe('S53174Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53174Page;
  let fixture: ComponentFixture<S53174Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53174Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53174Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
