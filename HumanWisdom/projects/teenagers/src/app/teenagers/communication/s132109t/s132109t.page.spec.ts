import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132109tPage } from './s132109t.page';

describe('S132109tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132109tPage;
  let fixture: ComponentFixture<S132109tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132109tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132109tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
