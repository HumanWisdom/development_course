import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62096tPage } from './s62096t.page';

describe('S62096tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62096tPage;
  let fixture: ComponentFixture<S62096tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62096tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62096tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
