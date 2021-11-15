import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62184tPage } from './s62184t.page';

describe('S62184tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62184tPage;
  let fixture: ComponentFixture<S62184tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62184tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62184tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
