import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64050Page } from './s64050.page';

describe('S64050Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64050Page;
  let fixture: ComponentFixture<S64050Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64050Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64050Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
