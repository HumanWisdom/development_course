import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62095Page } from './s62095.page';

describe('S62095Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62095Page;
  let fixture: ComponentFixture<S62095Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62095Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62095Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
