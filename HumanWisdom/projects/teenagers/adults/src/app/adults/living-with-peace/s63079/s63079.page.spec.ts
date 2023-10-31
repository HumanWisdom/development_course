import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63079Page } from './s63079.page';

describe('S63079Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63079Page;
  let fixture: ComponentFixture<S63079Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63079Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63079Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
