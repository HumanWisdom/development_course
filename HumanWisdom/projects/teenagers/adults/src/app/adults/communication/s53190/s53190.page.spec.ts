import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53190Page } from './s53190.page';

describe('S53190Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53190Page;
  let fixture: ComponentFixture<S53190Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53190Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53190Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
