import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60103Page } from './s60103.page';

describe('S60103Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60103Page;
  let fixture: ComponentFixture<S60103Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60103Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60103Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
