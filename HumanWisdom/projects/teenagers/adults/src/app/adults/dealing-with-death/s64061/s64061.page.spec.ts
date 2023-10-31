import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64061Page } from './s64061.page';

describe('S64061Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64061Page;
  let fixture: ComponentFixture<S64061Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64061Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64061Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
