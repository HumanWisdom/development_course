import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18107Page } from './s18107.page';

describe('S18107Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18107Page;
  let fixture: ComponentFixture<S18107Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18107Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18107Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
