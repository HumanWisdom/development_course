import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59040tPage } from './s59040t.page';

describe('S59040tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59040tPage;
  let fixture: ComponentFixture<S59040tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59040tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59040tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
