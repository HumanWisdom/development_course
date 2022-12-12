import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53147Page } from './s53147.page';

describe('S53147Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53147Page;
  let fixture: ComponentFixture<S53147Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53147Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53147Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
