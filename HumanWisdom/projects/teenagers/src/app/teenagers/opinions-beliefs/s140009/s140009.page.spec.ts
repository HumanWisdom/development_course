import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140009Page } from './s140009.page';

describe('S140009Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140009Page;
  let fixture: ComponentFixture<S140009Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140009Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140009Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
