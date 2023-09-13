import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141051tPage } from './s141051t.page';

describe('S141051tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141051tPage;
  let fixture: ComponentFixture<S141051tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141051tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141051tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
