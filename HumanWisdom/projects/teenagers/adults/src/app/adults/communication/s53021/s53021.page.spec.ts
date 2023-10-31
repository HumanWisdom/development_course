import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53021Page } from './s53021.page';

describe('S53021Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53021Page;
  let fixture: ComponentFixture<S53021Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53021Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53021Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
