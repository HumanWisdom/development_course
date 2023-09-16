import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141009Page } from './s141009.page';

describe('S141009Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141009Page;
  let fixture: ComponentFixture<S141009Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141009Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141009Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
