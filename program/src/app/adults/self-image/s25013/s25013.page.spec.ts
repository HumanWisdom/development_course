import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S25013Page } from './s25013.page';

describe('S25013Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S25013Page;
  let fixture: ComponentFixture<S25013Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S25013Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S25013Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
