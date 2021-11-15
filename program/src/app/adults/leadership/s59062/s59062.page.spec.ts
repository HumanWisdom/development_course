import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59062Page } from './s59062.page';

describe('S59062Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59062Page;
  let fixture: ComponentFixture<S59062Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59062Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59062Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
