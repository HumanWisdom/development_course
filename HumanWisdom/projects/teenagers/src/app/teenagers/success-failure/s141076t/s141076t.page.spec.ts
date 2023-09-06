import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141076tPage } from './s141076t.page';

describe('S141076tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141076tPage;
  let fixture: ComponentFixture<S141076tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141076tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141076tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
