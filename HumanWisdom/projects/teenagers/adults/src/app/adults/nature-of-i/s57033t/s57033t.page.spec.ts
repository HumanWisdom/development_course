import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57033tPage } from './s57033t.page';

describe('S57033tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57033tPage;
  let fixture: ComponentFixture<S57033tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57033tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57033tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
