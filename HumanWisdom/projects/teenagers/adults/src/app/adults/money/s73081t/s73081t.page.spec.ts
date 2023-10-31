import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73081tPage } from './s73081t.page';

describe('S73081tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73081tPage;
  let fixture: ComponentFixture<S73081tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73081tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73081tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
