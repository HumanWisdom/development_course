import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64016Page } from './s64016.page';

describe('S64016Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64016Page;
  let fixture: ComponentFixture<S64016Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64016Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64016Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
