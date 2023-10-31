import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63047Page } from './s63047.page';

describe('S63047Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63047Page;
  let fixture: ComponentFixture<S63047Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63047Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63047Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
