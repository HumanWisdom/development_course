import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73003Page } from './s73003.page';

describe('S73003Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73003Page;
  let fixture: ComponentFixture<S73003Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73003Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73003Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
