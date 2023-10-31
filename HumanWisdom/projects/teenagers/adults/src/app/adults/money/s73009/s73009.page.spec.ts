import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73009Page } from './s73009.page';

describe('S73009Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73009Page;
  let fixture: ComponentFixture<S73009Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73009Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73009Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
