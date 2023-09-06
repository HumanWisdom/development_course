import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140100tPage } from './s140100t.page';

describe('S140100tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140100tPage;
  let fixture: ComponentFixture<S140100tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140100tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140100tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
