import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58081Page } from './s58081.page';

describe('S58081Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58081Page;
  let fixture: ComponentFixture<S58081Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58081Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58081Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
