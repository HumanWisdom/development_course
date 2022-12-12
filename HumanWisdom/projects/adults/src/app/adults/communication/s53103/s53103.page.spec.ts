import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53103Page } from './s53103.page';

describe('S53103Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53103Page;
  let fixture: ComponentFixture<S53103Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53103Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53103Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
