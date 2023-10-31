import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49044Page } from './s49044.page';

describe('S49044Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49044Page;
  let fixture: ComponentFixture<S49044Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49044Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49044Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
