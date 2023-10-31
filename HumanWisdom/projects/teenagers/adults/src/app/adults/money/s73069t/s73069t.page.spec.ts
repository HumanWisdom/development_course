import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73069tPage } from './s73069t.page';

describe('S73069tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73069tPage;
  let fixture: ComponentFixture<S73069tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73069tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73069tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
