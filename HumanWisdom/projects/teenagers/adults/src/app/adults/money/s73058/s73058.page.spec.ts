import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73058Page } from './s73058.page';

describe('S73058Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73058Page;
  let fixture: ComponentFixture<S73058Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73058Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73058Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
