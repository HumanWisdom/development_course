import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18005Page } from './s18005.page';

describe('S18005Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18005Page;
  let fixture: ComponentFixture<S18005Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18005Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18005Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
