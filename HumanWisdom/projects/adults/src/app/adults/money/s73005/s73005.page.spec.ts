import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73005Page } from './s73005.page';

describe('S73005Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73005Page;
  let fixture: ComponentFixture<S73005Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73005Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73005Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
