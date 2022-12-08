import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64035Page } from './s64035.page';

describe('S64035Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64035Page;
  let fixture: ComponentFixture<S64035Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64035Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64035Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
