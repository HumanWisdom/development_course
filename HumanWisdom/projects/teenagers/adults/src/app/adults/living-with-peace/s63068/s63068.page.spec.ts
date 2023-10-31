import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63068Page } from './s63068.page';

describe('S63068Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63068Page;
  let fixture: ComponentFixture<S63068Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63068Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63068Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
