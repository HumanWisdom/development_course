import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18046Page } from './s18046.page';

describe('S18046Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18046Page;
  let fixture: ComponentFixture<S18046Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18046Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18046Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
