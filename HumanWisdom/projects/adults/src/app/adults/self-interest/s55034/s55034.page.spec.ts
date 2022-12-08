import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S55034Page } from './s55034.page';

describe('S55034Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S55034Page;
  let fixture: ComponentFixture<S55034Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S55034Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S55034Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
