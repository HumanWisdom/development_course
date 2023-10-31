import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63071Page } from './s63071.page';

describe('S63071Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63071Page;
  let fixture: ComponentFixture<S63071Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63071Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63071Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
