import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60049Page } from './s60049.page';

describe('S60049Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60049Page;
  let fixture: ComponentFixture<S60049Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60049Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60049Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
