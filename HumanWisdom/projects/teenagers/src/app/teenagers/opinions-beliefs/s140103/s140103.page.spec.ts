import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140103Page } from './s140103.page';

describe('S140103Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140103Page;
  let fixture: ComponentFixture<S140103Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140103Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140103Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
