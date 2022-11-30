import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62153tPage } from './s62153t.page';

describe('S62153tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62153tPage;
  let fixture: ComponentFixture<S62153tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62153tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62153tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
