import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49096Page } from './s49096.page';

describe('S49096Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49096Page;
  let fixture: ComponentFixture<S49096Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49096Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49096Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
