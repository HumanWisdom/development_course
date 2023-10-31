import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63051Page } from './s63051.page';

describe('S63051Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63051Page;
  let fixture: ComponentFixture<S63051Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63051Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63051Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
