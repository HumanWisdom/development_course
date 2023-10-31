import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18051Page } from './s18051.page';

describe('S18051Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18051Page;
  let fixture: ComponentFixture<S18051Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18051Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18051Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
