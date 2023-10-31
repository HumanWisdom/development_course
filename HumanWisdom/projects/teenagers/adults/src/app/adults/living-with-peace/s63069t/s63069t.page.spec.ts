import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63069tPage } from './s63069t.page';

describe('S63069tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63069tPage;
  let fixture: ComponentFixture<S63069tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63069tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63069tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
