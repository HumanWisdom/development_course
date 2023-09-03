import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140065tPage } from './s140065t.page';

describe('S140065tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140065tPage;
  let fixture: ComponentFixture<S140065tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140065tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140065tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
