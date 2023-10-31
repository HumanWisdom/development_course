import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18091Page } from './s18091.page';

describe('S18091Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18091Page;
  let fixture: ComponentFixture<S18091Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18091Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18091Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
