import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59084Page } from './s59084.page';

describe('S59084Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59084Page;
  let fixture: ComponentFixture<S59084Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59084Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59084Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
