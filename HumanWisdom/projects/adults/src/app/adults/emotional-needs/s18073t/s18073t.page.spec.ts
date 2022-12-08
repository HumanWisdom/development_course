import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18073tPage } from './s18073t.page';

describe('S18073tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18073tPage;
  let fixture: ComponentFixture<S18073tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18073tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18073tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
