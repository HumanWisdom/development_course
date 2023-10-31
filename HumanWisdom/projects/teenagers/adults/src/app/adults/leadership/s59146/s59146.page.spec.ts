import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59146Page } from './s59146.page';

describe('S59146Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59146Page;
  let fixture: ComponentFixture<S59146Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59146Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59146Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
