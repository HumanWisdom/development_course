import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60091tPage } from './s60091t.page';

describe('S60091tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60091tPage;
  let fixture: ComponentFixture<S60091tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60091tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60091tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
