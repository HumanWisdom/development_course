import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49032Page } from './s49032.page';

describe('S49032Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49032Page;
  let fixture: ComponentFixture<S49032Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49032Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49032Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
