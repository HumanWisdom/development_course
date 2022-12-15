import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18034Page } from './s18034.page';

describe('S18034Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18034Page;
  let fixture: ComponentFixture<S18034Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18034Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18034Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
