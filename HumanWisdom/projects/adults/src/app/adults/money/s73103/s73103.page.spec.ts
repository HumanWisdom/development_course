import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73103Page } from './s73103.page';

describe('S73103Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73103Page;
  let fixture: ComponentFixture<S73103Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73103Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73103Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
