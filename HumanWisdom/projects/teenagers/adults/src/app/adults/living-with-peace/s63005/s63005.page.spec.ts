import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63005Page } from './s63005.page';

describe('S63005Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63005Page;
  let fixture: ComponentFixture<S63005Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63005Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63005Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
