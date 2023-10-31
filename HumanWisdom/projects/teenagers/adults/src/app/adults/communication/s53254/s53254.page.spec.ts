import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53254Page } from './s53254.page';

describe('S53254Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53254Page;
  let fixture: ComponentFixture<S53254Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53254Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53254Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
