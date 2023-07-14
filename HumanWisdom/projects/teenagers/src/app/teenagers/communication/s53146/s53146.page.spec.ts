import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53146Page } from './s53146.page';

describe('S53146Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53146Page;
  let fixture: ComponentFixture<S53146Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53146Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53146Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
