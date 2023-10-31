import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S55043Page } from './s55043.page';

describe('S55043Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S55043Page;
  let fixture: ComponentFixture<S55043Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S55043Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S55043Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
