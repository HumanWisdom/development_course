import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58021Page } from './s58021.page';

describe('S58021Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58021Page;
  let fixture: ComponentFixture<S58021Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58021Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58021Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
