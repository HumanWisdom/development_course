import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63072Page } from './s63072.page';

describe('S63072Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63072Page;
  let fixture: ComponentFixture<S63072Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63072Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63072Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
