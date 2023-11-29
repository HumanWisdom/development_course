import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141016Page } from './s141016.page';

describe('S141016Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141016Page;
  let fixture: ComponentFixture<S141016Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141016Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141016Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
