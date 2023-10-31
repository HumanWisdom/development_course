import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60081Page } from './s60081.page';

describe('S60081Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60081Page;
  let fixture: ComponentFixture<S60081Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60081Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60081Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
