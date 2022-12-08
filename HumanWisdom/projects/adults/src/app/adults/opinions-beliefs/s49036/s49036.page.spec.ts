import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49036Page } from './s49036.page';

describe('S49036Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49036Page;
  let fixture: ComponentFixture<S49036Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49036Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49036Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
