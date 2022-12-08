import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73012Page } from './s73012.page';

describe('S73012Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73012Page;
  let fixture: ComponentFixture<S73012Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73012Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73012Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
