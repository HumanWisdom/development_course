import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59149Page } from './s59149.page';

describe('S59149Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59149Page;
  let fixture: ComponentFixture<S59149Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59149Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59149Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
