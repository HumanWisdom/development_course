import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63050tPage } from './s63050t.page';

describe('S63050tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63050tPage;
  let fixture: ComponentFixture<S63050tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63050tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63050tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
