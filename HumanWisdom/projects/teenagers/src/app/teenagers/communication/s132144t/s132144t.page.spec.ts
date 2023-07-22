import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132144tPage } from './s132144t.page';

describe('S132144tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132144tPage;
  let fixture: ComponentFixture<S132144tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132144tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132144tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
