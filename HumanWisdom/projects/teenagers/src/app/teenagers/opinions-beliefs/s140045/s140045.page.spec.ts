import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140045Page } from './s140045.page';

describe('S140045Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140045Page;
  let fixture: ComponentFixture<S140045Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140045Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140045Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
