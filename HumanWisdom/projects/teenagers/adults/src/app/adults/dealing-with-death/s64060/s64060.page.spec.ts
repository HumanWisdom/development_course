import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64060Page } from './s64060.page';

describe('S64060Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64060Page;
  let fixture: ComponentFixture<S64060Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64060Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64060Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
