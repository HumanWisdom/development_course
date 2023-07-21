import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132147tPage } from './s132147t.page';

describe('S132147tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132147tPage;
  let fixture: ComponentFixture<S132147tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132147tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132147tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
