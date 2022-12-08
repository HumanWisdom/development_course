import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73044Page } from './s73044.page';

describe('S73044Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73044Page;
  let fixture: ComponentFixture<S73044Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73044Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73044Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
