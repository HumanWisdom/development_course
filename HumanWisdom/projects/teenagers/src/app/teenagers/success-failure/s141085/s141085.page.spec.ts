import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141085Page } from './s141085.page';

describe('S141085Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141085Page;
  let fixture: ComponentFixture<S141085Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141085Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141085Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
