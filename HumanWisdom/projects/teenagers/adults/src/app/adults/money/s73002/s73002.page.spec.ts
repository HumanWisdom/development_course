import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73002Page } from './s73002.page';

describe('S73002Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73002Page;
  let fixture: ComponentFixture<S73002Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73002Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73002Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
