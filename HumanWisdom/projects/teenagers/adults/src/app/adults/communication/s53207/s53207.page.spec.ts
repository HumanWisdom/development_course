import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53207Page } from './s53207.page';

describe('S53207Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53207Page;
  let fixture: ComponentFixture<S53207Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53207Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53207Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
