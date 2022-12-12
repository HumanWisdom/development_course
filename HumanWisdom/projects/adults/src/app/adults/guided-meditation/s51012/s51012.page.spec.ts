import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S51012Page } from './s51012.page';

describe('S51012Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S51012Page;
  let fixture: ComponentFixture<S51012Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S51012Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S51012Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
