import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18086tPage } from './s18086t.page';

describe('S18086tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18086tPage;
  let fixture: ComponentFixture<S18086tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18086tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18086tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
