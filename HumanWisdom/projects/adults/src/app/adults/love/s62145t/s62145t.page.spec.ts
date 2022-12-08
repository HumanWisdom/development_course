import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62145tPage } from './s62145t.page';

describe('S62145tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62145tPage;
  let fixture: ComponentFixture<S62145tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62145tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62145tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
