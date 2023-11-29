import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132198Page } from './s132198.page';

describe('S132198Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132198Page;
  let fixture: ComponentFixture<S132198Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132198Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132198Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
