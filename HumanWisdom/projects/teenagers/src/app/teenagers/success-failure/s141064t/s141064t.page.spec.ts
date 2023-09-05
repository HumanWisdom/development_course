import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141064tPage } from './s141064t.page';

describe('S141064tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141064tPage;
  let fixture: ComponentFixture<S141064tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141064tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141064tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
