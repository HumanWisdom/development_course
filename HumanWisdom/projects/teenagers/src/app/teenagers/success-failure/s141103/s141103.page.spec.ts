import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141103Page } from './s141103.page';

describe('S141103Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141103Page;
  let fixture: ComponentFixture<S141103Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141103Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141103Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
