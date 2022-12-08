import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59038tPage } from './s59038t.page';

describe('S59038tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59038tPage;
  let fixture: ComponentFixture<S59038tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59038tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59038tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
