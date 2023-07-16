import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53118Page } from './s132120.page';

describe('S53118Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53118Page;
  let fixture: ComponentFixture<S53118Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53118Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53118Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
