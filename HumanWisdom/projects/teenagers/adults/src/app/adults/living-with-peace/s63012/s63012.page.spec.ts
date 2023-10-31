import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63012Page } from './s63012.page';

describe('S63012Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63012Page;
  let fixture: ComponentFixture<S63012Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63012Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63012Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
