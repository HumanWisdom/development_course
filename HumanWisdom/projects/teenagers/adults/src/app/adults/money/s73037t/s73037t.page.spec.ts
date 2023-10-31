import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73037tPage } from './s73037t.page';

describe('S73037tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73037tPage;
  let fixture: ComponentFixture<S73037tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73037tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73037tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
