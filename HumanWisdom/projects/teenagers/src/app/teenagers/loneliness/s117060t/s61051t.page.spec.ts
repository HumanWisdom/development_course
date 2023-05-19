import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61171tPage } from './s61171t.page';

describe('S61171tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61171tPage;
  let fixture: ComponentFixture<S61171tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61171tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61171tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
