import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117074tPage } from './s117074t.page';

describe('S117074tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S117074tPage;
  let fixture: ComponentFixture<S117074tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117074tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117074tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
