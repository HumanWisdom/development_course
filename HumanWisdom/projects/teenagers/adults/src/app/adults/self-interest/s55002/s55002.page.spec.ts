import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S55002Page } from './s55002.page';

describe('S55002Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S55002Page;
  let fixture: ComponentFixture<S55002Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S55002Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S55002Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
