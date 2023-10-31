import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59080tPage } from './s59080t.page';

describe('S59080tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59080tPage;
  let fixture: ComponentFixture<S59080tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59080tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59080tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
