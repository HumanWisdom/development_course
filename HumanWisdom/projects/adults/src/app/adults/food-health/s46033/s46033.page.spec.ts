import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46033Page } from './s46033.page';

describe('S46033Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46033Page;
  let fixture: ComponentFixture<S46033Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46033Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46033Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
