import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58027Page } from './s58027.page';

describe('S58027Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58027Page;
  let fixture: ComponentFixture<S58027Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58027Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58027Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
