import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49055Page } from './s49055.page';

describe('S49055Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49055Page;
  let fixture: ComponentFixture<S49055Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49055Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49055Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
