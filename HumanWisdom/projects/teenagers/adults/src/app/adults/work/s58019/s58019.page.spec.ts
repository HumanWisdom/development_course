import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58019Page } from './s58019.page';

describe('S58019Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58019Page;
  let fixture: ComponentFixture<S58019Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58019Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58019Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
