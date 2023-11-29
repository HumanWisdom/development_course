import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132214Page } from './s132214.page';

describe('S132214Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132214Page;
  let fixture: ComponentFixture<S132214Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132214Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132214Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
