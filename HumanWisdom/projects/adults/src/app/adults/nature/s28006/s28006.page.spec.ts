import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S28006Page } from './s28006.page';

describe('S28006Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S28006Page;
  let fixture: ComponentFixture<S28006Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S28006Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S28006Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
