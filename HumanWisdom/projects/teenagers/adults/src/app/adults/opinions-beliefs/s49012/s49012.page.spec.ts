import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49012Page } from './s49012.page';

describe('S49012Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49012Page;
  let fixture: ComponentFixture<S49012Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49012Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49012Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
