import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53164Page } from './s53164.page';

describe('S53164Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53164Page;
  let fixture: ComponentFixture<S53164Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53164Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53164Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
