import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59065Page } from './s59065.page';

describe('S59065Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59065Page;
  let fixture: ComponentFixture<S59065Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59065Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59065Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
