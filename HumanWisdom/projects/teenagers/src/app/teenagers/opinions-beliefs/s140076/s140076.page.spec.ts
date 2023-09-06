import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140076Page } from './s140076.page';

describe('S140076Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140076Page;
  let fixture: ComponentFixture<S140076Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140076Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140076Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
