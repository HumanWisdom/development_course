import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58046Page } from './s58046.page';

describe('S58046Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58046Page;
  let fixture: ComponentFixture<S58046Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58046Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58046Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
