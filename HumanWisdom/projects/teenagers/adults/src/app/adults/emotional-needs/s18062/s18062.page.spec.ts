import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18062Page } from './s18062.page';

describe('S18062Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18062Page;
  let fixture: ComponentFixture<S18062Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18062Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18062Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
