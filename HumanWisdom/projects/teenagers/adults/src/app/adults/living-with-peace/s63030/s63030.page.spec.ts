import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63030Page } from './s63030.page';

describe('S63030Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63030Page;
  let fixture: ComponentFixture<S63030Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63030Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63030Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
