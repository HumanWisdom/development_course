import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53186Page } from './s53186.page';

describe('S53186Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53186Page;
  let fixture: ComponentFixture<S53186Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53186Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53186Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
