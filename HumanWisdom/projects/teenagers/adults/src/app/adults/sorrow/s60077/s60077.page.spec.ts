import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60077Page } from './s60077.page';

describe('S60077Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60077Page;
  let fixture: ComponentFixture<S60077Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60077Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60077Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
