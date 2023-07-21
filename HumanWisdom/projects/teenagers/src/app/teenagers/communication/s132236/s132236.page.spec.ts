import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132236Page } from './s132236.page';

describe('S132236Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132236Page;
  let fixture: ComponentFixture<S132236Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132236Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132236Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
