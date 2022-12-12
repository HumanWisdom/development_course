import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S25033Page } from './s25033.page';

describe('S25033Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S25033Page;
  let fixture: ComponentFixture<S25033Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S25033Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S25033Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
