import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63025Page } from './s63025.page';

describe('S63025Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63025Page;
  let fixture: ComponentFixture<S63025Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63025Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63025Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
