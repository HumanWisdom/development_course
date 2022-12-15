import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64068Page } from './s64068.page';

describe('S64068Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64068Page;
  let fixture: ComponentFixture<S64068Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64068Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64068Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
