import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132103Page } from './s132103.page';

describe('S132103Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132103Page;
  let fixture: ComponentFixture<S132103Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132103Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132103Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
