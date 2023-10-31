import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63043Page } from './s63043.page';

describe('S63043Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63043Page;
  let fixture: ComponentFixture<S63043Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63043Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63043Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
