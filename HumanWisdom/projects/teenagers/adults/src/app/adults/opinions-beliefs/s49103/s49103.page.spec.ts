import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49103Page } from './s49103.page';

describe('S49103Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49103Page;
  let fixture: ComponentFixture<S49103Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49103Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49103Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
