import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64003Page } from './s64003.page';

describe('S64003Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64003Page;
  let fixture: ComponentFixture<S64003Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64003Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64003Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
