import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57065tPage } from './s57065t.page';

describe('S57065tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57065tPage;
  let fixture: ComponentFixture<S57065tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57065tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57065tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
