import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64041Page } from './s64041.page';

describe('S64041Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64041Page;
  let fixture: ComponentFixture<S64041Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64041Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64041Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
