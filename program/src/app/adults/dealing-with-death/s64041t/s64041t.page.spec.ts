import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64041tPage } from './s64041t.page';

describe('S64041tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64041tPage;
  let fixture: ComponentFixture<S64041tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64041tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64041tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
