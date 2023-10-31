import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64066Page } from './s64066.page';

describe('S64066Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64066Page;
  let fixture: ComponentFixture<S64066Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64066Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64066Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
