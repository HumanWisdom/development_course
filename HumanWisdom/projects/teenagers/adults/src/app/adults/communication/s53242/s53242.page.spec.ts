import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53242Page } from './s53242.page';

describe('S53242Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53242Page;
  let fixture: ComponentFixture<S53242Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53242Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53242Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
