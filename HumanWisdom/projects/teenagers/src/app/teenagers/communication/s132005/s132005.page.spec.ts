import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132005Page } from './s132005.page';

describe('S132005Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132005Page;
  let fixture: ComponentFixture<S132005Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132005Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132005Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
