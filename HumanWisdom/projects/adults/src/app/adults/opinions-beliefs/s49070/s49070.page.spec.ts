import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49070Page } from './s49070.page';

describe('S49070Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49070Page;
  let fixture: ComponentFixture<S49070Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49070Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49070Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
