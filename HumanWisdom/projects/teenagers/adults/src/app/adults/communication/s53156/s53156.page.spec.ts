import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53156Page } from './s53156.page';

describe('S53156Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53156Page;
  let fixture: ComponentFixture<S53156Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53156Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53156Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
