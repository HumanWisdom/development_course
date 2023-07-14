import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53056Page } from './s53056.page';

describe('S53056Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53056Page;
  let fixture: ComponentFixture<S53056Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53056Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53056Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
