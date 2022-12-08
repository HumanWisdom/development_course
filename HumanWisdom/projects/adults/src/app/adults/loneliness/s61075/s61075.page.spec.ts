import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61075Page } from './s61075.page';

describe('S61075Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61075Page;
  let fixture: ComponentFixture<S61075Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61075Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61075Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
