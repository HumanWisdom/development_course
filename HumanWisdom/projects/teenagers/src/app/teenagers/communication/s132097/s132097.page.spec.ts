import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53095Page } from './s132097.page';

describe('S53095Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53095Page;
  let fixture: ComponentFixture<S53095Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53095Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53095Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
