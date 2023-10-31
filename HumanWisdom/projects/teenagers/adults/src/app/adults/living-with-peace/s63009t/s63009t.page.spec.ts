import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63009tPage } from './s63009t.page';

describe('S63009tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63009tPage;
  let fixture: ComponentFixture<S63009tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63009tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63009tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
