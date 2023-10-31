import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53003Page } from './s53003.page';

describe('S53003Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53003Page;
  let fixture: ComponentFixture<S53003Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53003Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53003Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
