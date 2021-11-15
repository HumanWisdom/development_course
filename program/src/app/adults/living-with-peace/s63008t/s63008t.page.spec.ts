import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63008tPage } from './s63008t.page';

describe('S63008tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63008tPage;
  let fixture: ComponentFixture<S63008tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63008tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63008tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
