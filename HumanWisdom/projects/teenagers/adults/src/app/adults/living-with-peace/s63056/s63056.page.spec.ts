import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63056Page } from './s63056.page';

describe('S63056Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63056Page;
  let fixture: ComponentFixture<S63056Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63056Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63056Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
