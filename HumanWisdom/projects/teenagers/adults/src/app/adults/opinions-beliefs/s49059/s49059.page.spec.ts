import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49059Page } from './s49059.page';

describe('S49059Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49059Page;
  let fixture: ComponentFixture<S49059Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49059Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49059Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
