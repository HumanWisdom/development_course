import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132201Page } from './s132201.page';

describe('S132201Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132201Page;
  let fixture: ComponentFixture<S132201Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132201Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132201Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
