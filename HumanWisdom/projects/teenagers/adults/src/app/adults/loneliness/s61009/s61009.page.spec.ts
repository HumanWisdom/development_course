import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61009Page } from './s61009.page';

describe('S61009Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61009Page;
  let fixture: ComponentFixture<S61009Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61009Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61009Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
