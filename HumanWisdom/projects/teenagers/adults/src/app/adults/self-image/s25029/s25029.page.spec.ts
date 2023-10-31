import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S25029Page } from './s25029.page';

describe('S25029Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S25029Page;
  let fixture: ComponentFixture<S25029Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S25029Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S25029Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
