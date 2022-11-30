import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61100Page } from './s61100.page';

describe('S61100Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61100Page;
  let fixture: ComponentFixture<S61100Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61100Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61100Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
