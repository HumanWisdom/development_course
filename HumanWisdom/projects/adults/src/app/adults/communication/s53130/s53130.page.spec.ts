import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53130Page } from './s53130.page';

describe('S53130Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53130Page;
  let fixture: ComponentFixture<S53130Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53130Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53130Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
