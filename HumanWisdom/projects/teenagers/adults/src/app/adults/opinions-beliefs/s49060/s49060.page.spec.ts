import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49060Page } from './s49060.page';

describe('S49060Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49060Page;
  let fixture: ComponentFixture<S49060Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49060Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49060Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
