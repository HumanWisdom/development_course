import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53244Page } from './s53244.page';

describe('S53244Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53244Page;
  let fixture: ComponentFixture<S53244Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53244Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53244Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
