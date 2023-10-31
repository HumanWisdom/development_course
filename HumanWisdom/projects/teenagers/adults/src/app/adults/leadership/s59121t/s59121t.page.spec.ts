import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59121tPage } from './s59121t.page';

describe('S59121tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59121tPage;
  let fixture: ComponentFixture<S59121tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59121tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59121tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
