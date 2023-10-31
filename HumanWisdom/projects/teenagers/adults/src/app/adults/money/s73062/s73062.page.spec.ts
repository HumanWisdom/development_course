import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73062Page } from './s73062.page';

describe('S73062Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73062Page;
  let fixture: ComponentFixture<S73062Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73062Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73062Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
