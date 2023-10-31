import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S55037Page } from './s55037.page';

describe('S55037Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S55037Page;
  let fixture: ComponentFixture<S55037Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S55037Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S55037Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
