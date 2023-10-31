import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49068Page } from './s49068.page';

describe('S49068Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49068Page;
  let fixture: ComponentFixture<S49068Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49068Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49068Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
