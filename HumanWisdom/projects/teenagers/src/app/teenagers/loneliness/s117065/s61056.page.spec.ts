import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61176Page } from './s61176.page';

describe('S61176Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61176Page;
  let fixture: ComponentFixture<S61176Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61176Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61176Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
