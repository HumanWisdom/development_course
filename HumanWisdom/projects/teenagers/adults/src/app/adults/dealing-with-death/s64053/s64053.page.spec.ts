import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64053Page } from './s64053.page';

describe('S64053Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64053Page;
  let fixture: ComponentFixture<S64053Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64053Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64053Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
