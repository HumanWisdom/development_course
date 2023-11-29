import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132013Page } from './s132013.page';

describe('S132013Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132013Page;
  let fixture: ComponentFixture<S132013Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132013Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132013Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
