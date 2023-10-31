import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61087Page } from './s61087.page';

describe('S61087Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61087Page;
  let fixture: ComponentFixture<S61087Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61087Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61087Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
