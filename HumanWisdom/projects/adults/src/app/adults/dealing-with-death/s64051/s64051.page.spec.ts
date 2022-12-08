import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64051Page } from './s64051.page';

describe('S64051Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64051Page;
  let fixture: ComponentFixture<S64051Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64051Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64051Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
