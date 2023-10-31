import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49037Page } from './s49037.page';

describe('S49037Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49037Page;
  let fixture: ComponentFixture<S49037Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49037Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49037Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
