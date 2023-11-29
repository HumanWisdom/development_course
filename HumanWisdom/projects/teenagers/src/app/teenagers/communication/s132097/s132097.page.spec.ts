import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132097Page } from './s132097.page';

describe('S132097Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132097Page;
  let fixture: ComponentFixture<S132097Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132097Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132097Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
