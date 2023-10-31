import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62193tPage } from './s62193t.page';

describe('S62193tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62193tPage;
  let fixture: ComponentFixture<S62193tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62193tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62193tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
