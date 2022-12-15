import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45081Page } from './s45081.page';

describe('S45081Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45081Page;
  let fixture: ComponentFixture<S45081Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45081Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45081Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
