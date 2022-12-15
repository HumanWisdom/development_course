import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18006Page } from './s18006.page';

describe('S18006Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18006Page;
  let fixture: ComponentFixture<S18006Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18006Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18006Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
