import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60007Page } from './s60007.page';

describe('S60007Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60007Page;
  let fixture: ComponentFixture<S60007Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60007Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60007Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
