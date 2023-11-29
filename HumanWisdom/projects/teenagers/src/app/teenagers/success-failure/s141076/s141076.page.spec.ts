import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141076Page } from './s141076.page';

describe('S141076Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141076Page;
  let fixture: ComponentFixture<S141076Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141076Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141076Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
