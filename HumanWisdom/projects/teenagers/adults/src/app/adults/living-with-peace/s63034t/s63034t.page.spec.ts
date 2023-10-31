import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63034tPage } from './s63034t.page';

describe('S63034tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63034tPage;
  let fixture: ComponentFixture<S63034tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63034tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63034tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
