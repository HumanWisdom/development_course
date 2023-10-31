import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73106Page } from './s73106.page';

describe('S73106Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73106Page;
  let fixture: ComponentFixture<S73106Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73106Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73106Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
