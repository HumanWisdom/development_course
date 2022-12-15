import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59095tPage } from './s59095t.page';

describe('S59095tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59095tPage;
  let fixture: ComponentFixture<S59095tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59095tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59095tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
