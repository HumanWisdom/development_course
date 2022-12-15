import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62140tPage } from './s62140t.page';

describe('S62140tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62140tPage;
  let fixture: ComponentFixture<S62140tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62140tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62140tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
