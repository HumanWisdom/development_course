import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63076Page } from './s63076.page';

describe('S63076Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63076Page;
  let fixture: ComponentFixture<S63076Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63076Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63076Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
