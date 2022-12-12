import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64048Page } from './s64048.page';

describe('S64048Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64048Page;
  let fixture: ComponentFixture<S64048Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64048Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64048Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
