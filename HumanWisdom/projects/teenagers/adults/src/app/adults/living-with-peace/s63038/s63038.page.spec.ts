import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63038Page } from './s63038.page';

describe('S63038Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63038Page;
  let fixture: ComponentFixture<S63038Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63038Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63038Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
