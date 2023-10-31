import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53229Page } from './s53229.page';

describe('S53229Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53229Page;
  let fixture: ComponentFixture<S53229Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53229Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53229Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
