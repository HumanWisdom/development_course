import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60112Page } from './s60112.page';

describe('S60112Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60112Page;
  let fixture: ComponentFixture<S60112Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60112Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60112Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
