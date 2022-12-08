import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49056Page } from './s49056.page';

describe('S49056Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49056Page;
  let fixture: ComponentFixture<S49056Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49056Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49056Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
