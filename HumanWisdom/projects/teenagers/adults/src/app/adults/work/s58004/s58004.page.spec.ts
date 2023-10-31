import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58004Page } from './s58004.page';

describe('S58004Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58004Page;
  let fixture: ComponentFixture<S58004Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58004Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58004Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
