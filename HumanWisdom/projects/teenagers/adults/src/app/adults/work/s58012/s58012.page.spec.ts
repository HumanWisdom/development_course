import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58012Page } from './s58012.page';

describe('S58012Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58012Page;
  let fixture: ComponentFixture<S58012Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58012Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58012Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
