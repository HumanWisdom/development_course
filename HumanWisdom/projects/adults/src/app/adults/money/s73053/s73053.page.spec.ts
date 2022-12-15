import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73053Page } from './s73053.page';

describe('S73053Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73053Page;
  let fixture: ComponentFixture<S73053Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73053Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73053Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
