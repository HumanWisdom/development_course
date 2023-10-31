import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63052Page } from './s63052.page';

describe('S63052Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63052Page;
  let fixture: ComponentFixture<S63052Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63052Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63052Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
