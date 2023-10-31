import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59103Page } from './s59103.page';

describe('S59103Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59103Page;
  let fixture: ComponentFixture<S59103Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59103Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59103Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
