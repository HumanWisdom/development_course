import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64030Page } from './s64030.page';

describe('S64030Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64030Page;
  let fixture: ComponentFixture<S64030Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64030Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64030Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
