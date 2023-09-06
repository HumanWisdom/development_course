import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141003tPage } from './s141003t.page';

describe('S141003tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141003tPage;
  let fixture: ComponentFixture<S141003tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141003tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141003tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
