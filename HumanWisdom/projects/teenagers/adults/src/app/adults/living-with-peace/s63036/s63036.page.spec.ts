import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63036Page } from './s63036.page';

describe('S63036Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63036Page;
  let fixture: ComponentFixture<S63036Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63036Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63036Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
