import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59094Page } from './s59094.page';

describe('S59094Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59094Page;
  let fixture: ComponentFixture<S59094Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59094Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59094Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
