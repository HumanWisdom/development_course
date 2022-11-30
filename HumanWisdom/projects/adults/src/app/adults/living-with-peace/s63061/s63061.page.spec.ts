import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63061Page } from './s63061.page';

describe('S63061Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63061Page;
  let fixture: ComponentFixture<S63061Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63061Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63061Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
