import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134066Page } from './s134066.page';

describe('S134066Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134066Page;
  let fixture: ComponentFixture<S134066Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134066Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134066Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
