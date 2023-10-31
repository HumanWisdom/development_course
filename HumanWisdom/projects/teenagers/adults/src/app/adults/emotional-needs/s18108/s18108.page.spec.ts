import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18108Page } from './s18108.page';

describe('S18108Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18108Page;
  let fixture: ComponentFixture<S18108Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18108Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18108Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
