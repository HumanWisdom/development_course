import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73028tPage } from './s73028t.page';

describe('S73028tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73028tPage;
  let fixture: ComponentFixture<S73028tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73028tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73028tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
