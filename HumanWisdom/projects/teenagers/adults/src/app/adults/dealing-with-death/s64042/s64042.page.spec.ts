import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64042Page } from './s64042.page';

describe('S64042Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64042Page;
  let fixture: ComponentFixture<S64042Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64042Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64042Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
