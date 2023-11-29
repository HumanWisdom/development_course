import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134214Page } from './s134214.page';

describe('S134214Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134214Page;
  let fixture: ComponentFixture<S134214Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134214Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134214Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
