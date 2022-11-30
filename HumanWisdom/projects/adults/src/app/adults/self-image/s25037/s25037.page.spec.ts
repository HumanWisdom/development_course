import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S25037Page } from './s25037.page';

describe('S25037Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S25037Page;
  let fixture: ComponentFixture<S25037Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S25037Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S25037Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
