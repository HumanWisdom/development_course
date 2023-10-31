import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49006Page } from './s49006.page';

describe('S49006Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49006Page;
  let fixture: ComponentFixture<S49006Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49006Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49006Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
