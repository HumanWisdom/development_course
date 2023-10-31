import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60072Page } from './s60072.page';

describe('S60072Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60072Page;
  let fixture: ComponentFixture<S60072Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60072Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60072Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
