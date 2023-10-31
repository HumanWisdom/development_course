import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53150Page } from './s53150.page';

describe('S53150Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53150Page;
  let fixture: ComponentFixture<S53150Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53150Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53150Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
