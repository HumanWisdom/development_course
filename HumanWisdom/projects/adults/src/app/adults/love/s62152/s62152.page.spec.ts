import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62152Page } from './s62152.page';

describe('S62152Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62152Page;
  let fixture: ComponentFixture<S62152Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62152Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62152Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
