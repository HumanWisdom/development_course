import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134055Page } from './s134055.page';

describe('S134055Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134055Page;
  let fixture: ComponentFixture<S134055Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134055Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134055Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
