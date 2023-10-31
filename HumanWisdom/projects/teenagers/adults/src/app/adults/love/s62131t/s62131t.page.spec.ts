import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62131tPage } from './s62131t.page';

describe('S62131tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62131tPage;
  let fixture: ComponentFixture<S62131tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62131tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62131tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
