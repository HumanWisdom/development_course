import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141015Page } from './s141015.page';

describe('S141015Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141015Page;
  let fixture: ComponentFixture<S141015Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141015Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141015Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
