import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73004tPage } from './s73004t.page';

describe('S73004tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73004tPage;
  let fixture: ComponentFixture<S73004tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73004tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73004tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
