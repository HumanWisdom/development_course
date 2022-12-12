import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59008Page } from './s59008.page';

describe('S59008Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59008Page;
  let fixture: ComponentFixture<S59008Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59008Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59008Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
