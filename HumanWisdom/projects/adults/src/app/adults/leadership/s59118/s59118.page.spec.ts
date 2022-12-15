import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59118Page } from './s59118.page';

describe('S59118Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59118Page;
  let fixture: ComponentFixture<S59118Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59118Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59118Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
