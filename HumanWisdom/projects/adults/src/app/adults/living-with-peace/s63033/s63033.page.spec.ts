import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63033Page } from './s63033.page';

describe('S63033Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63033Page;
  let fixture: ComponentFixture<S63033Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63033Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63033Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
