import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53132Page } from './s53132.page';

describe('S53132Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53132Page;
  let fixture: ComponentFixture<S53132Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53132Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53132Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
