import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S25034Page } from './s25034.page';

describe('S25034Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S25034Page;
  let fixture: ComponentFixture<S25034Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S25034Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S25034Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
