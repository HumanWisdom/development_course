import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59077tPage } from './s59077t.page';

describe('S59077tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59077tPage;
  let fixture: ComponentFixture<S59077tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59077tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59077tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
