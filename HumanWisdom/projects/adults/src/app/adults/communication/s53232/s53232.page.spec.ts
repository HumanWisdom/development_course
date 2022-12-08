import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53232Page } from './s53232.page';

describe('S53232Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53232Page;
  let fixture: ComponentFixture<S53232Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53232Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53232Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
