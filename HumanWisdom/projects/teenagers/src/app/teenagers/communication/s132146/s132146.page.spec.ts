import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132146Page } from './s132146.page';

describe('S132146Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132146Page;
  let fixture: ComponentFixture<S132146Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132146Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132146Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
