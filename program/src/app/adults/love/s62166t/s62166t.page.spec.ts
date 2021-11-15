import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62166tPage } from './s62166t.page';

describe('S62166tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62166tPage;
  let fixture: ComponentFixture<S62166tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62166tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62166tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
