import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62209Page } from './s62209.page';

describe('S62209Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62209Page;
  let fixture: ComponentFixture<S62209Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62209Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62209Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
