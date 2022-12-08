import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53008Page } from './s53008.page';

describe('S53008Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53008Page;
  let fixture: ComponentFixture<S53008Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53008Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53008Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
