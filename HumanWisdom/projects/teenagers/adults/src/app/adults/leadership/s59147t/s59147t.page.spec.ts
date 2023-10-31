import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59147tPage } from './s59147t.page';

describe('S59147tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59147tPage;
  let fixture: ComponentFixture<S59147tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59147tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59147tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
