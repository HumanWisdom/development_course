import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48103Page } from './s48103.page';

describe('S48103Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48103Page;
  let fixture: ComponentFixture<S48103Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48103Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48103Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
