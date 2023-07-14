import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132012Page } from './s132012.page';

describe('S132012Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132012Page;
  let fixture: ComponentFixture<S132012Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132012Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132012Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
