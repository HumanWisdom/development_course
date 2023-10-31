import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53098Page } from './s53098.page';

describe('S53098Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53098Page;
  let fixture: ComponentFixture<S53098Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53098Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53098Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
