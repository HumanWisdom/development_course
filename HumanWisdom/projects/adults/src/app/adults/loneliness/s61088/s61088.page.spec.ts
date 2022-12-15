import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61088Page } from './s61088.page';

describe('S61088Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61088Page;
  let fixture: ComponentFixture<S61088Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61088Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61088Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
