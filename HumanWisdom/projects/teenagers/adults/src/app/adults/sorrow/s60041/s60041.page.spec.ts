import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60041Page } from './s60041.page';

describe('S60041Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60041Page;
  let fixture: ComponentFixture<S60041Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60041Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60041Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
