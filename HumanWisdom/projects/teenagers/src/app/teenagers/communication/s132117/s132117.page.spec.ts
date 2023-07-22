import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132117Page } from './s132117.page';

describe('S132117Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132117Page;
  let fixture: ComponentFixture<S132117Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132117Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132117Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
