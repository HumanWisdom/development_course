import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58052Page } from './s58052.page';

describe('S58052Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58052Page;
  let fixture: ComponentFixture<S58052Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58052Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58052Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
