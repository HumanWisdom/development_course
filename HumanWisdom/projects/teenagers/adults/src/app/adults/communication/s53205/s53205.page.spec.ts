import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53205Page } from './s53205.page';

describe('S53205Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53205Page;
  let fixture: ComponentFixture<S53205Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53205Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53205Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
