import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63040Page } from './s63040.page';

describe('S63040Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63040Page;
  let fixture: ComponentFixture<S63040Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63040Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63040Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
