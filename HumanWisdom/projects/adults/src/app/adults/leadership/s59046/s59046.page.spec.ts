import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59046Page } from './s59046.page';

describe('S59046Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59046Page;
  let fixture: ComponentFixture<S59046Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59046Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59046Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
