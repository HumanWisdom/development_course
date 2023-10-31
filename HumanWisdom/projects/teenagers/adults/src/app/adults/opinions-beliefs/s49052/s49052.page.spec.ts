import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49052Page } from './s49052.page';

describe('S49052Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49052Page;
  let fixture: ComponentFixture<S49052Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49052Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49052Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
