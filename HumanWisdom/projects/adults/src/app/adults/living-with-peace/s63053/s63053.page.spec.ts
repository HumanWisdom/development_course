import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63053Page } from './s63053.page';

describe('S63053Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63053Page;
  let fixture: ComponentFixture<S63053Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63053Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63053Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
