import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53179Page } from './s53179.page';

describe('S53179Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53179Page;
  let fixture: ComponentFixture<S53179Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53179Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53179Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
