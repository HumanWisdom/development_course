import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49001Page } from './s49001.page';

describe('S49001Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49001Page;
  let fixture: ComponentFixture<S49001Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49001Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49001Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
