import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49067p1Page } from './s49067p1.page';

describe('S49067p1Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49067p1Page;
  let fixture: ComponentFixture<S49067p1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49067p1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49067p1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
