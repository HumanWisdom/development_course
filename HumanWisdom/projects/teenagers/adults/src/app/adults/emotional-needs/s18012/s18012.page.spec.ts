import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18012Page } from './s18012.page';

describe('S18012Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18012Page;
  let fixture: ComponentFixture<S18012Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18012Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18012Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
