import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141032Page } from './s141032.page';

describe('S141032Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141032Page;
  let fixture: ComponentFixture<S141032Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141032Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141032Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
