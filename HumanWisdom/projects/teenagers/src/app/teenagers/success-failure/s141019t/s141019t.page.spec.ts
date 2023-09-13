import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141019tPage } from './s141019t.page';

describe('S141019tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141019tPage;
  let fixture: ComponentFixture<S141019tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141019tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141019tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
