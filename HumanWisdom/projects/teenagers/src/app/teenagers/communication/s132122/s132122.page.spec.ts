import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132122Page } from './s132122.page';

describe('S132122Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132122Page;
  let fixture: ComponentFixture<S132122Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132122Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132122Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
