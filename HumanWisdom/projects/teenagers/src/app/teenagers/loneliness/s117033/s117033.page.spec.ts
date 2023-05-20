import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117033Page } from './s117033.page';

describe('S117033Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S117033Page;
  let fixture: ComponentFixture<S117033Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117033Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117033Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
