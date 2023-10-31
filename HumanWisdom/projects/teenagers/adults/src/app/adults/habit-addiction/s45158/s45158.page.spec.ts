import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45158Page } from './s45158.page';

describe('S45158Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45158Page;
  let fixture: ComponentFixture<S45158Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45158Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45158Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
