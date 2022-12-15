import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46008Page } from './s46008.page';

describe('S46008Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46008Page;
  let fixture: ComponentFixture<S46008Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46008Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46008Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
