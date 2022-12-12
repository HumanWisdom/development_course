import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57015Page } from './s57015.page';

describe('S57015Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57015Page;
  let fixture: ComponentFixture<S57015Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57015Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57015Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
