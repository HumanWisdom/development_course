import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63029Page } from './s63029.page';

describe('S63029Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63029Page;
  let fixture: ComponentFixture<S63029Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63029Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63029Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
