import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48033tPage } from './s48033t.page';

describe('S48033tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48033tPage;
  let fixture: ComponentFixture<S48033tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48033tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48033tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
