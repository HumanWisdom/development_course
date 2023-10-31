import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18033tPage } from './s18033t.page';

describe('S18033tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18033tPage;
  let fixture: ComponentFixture<S18033tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18033tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18033tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
