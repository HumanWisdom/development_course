import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63044tPage } from './s63044t.page';

describe('S63044tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63044tPage;
  let fixture: ComponentFixture<S63044tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63044tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63044tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
