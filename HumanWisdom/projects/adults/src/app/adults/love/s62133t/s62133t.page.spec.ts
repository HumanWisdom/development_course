import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62133tPage } from './s62133t.page';

describe('S62133tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62133tPage;
  let fixture: ComponentFixture<S62133tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62133tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62133tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
