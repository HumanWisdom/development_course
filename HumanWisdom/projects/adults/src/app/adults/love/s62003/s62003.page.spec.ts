import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62003Page } from './s62003.page';

describe('S62003Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62003Page;
  let fixture: ComponentFixture<S62003Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62003Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62003Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
