import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53086Page } from './s53086.page';

describe('S53086Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53086Page;
  let fixture: ComponentFixture<S53086Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53086Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53086Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
