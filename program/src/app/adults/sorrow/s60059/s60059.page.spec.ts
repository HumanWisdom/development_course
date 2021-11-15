import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60059Page } from './s60059.page';

describe('S60059Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60059Page;
  let fixture: ComponentFixture<S60059Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60059Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60059Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
