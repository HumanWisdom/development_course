import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140069tPage } from './s140069t.page';

describe('S140069tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140069tPage;
  let fixture: ComponentFixture<S140069tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140069tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140069tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
