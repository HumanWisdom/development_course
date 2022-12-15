import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62170tPage } from './s62170t.page';

describe('S62170tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62170tPage;
  let fixture: ComponentFixture<S62170tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62170tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62170tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
