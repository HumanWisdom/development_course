import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63034Page } from './s63034.page';

describe('S63034Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63034Page;
  let fixture: ComponentFixture<S63034Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63034Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63034Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
