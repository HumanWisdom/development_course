import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58062Page } from './s58062.page';

describe('S58062Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58062Page;
  let fixture: ComponentFixture<S58062Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58062Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58062Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
