import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59051tPage } from './s59051t.page';

describe('S59051tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59051tPage;
  let fixture: ComponentFixture<S59051tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59051tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59051tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
