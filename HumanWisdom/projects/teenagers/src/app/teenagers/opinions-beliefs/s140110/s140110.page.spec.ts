import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140110Page } from './s140110.page';

describe('S140110Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140110Page;
  let fixture: ComponentFixture<S140110Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140110Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140110Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
