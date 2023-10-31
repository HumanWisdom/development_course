import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61103Page } from './s61103.page';

describe('S61103Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61103Page;
  let fixture: ComponentFixture<S61103Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61103Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61103Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
