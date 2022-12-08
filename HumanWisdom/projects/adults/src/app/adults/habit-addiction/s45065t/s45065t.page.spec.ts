import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45065tPage } from './s45065t.page';

describe('S45065tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45065tPage;
  let fixture: ComponentFixture<S45065tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45065tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45065tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
