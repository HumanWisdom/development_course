import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53236Page } from './s53236.page';

describe('S53236Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53236Page;
  let fixture: ComponentFixture<S53236Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53236Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53236Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
