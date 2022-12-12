import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61012Page } from './s61012.page';

describe('S61012Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61012Page;
  let fixture: ComponentFixture<S61012Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61012Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61012Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
