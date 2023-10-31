import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S55033Page } from './s55033.page';

describe('S55033Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S55033Page;
  let fixture: ComponentFixture<S55033Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S55033Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S55033Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
