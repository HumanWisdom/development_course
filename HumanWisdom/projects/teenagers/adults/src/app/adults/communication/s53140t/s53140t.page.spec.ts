import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53140tPage } from './s53140t.page';

describe('S53140tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53140tPage;
  let fixture: ComponentFixture<S53140tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53140tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53140tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
