import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59088tPage } from './s59088t.page';

describe('S59088tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59088tPage;
  let fixture: ComponentFixture<S59088tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59088tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59088tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
