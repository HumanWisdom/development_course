import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132086Page } from './s132086.page';

describe('S132086Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132086Page;
  let fixture: ComponentFixture<S132086Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132086Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132086Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
