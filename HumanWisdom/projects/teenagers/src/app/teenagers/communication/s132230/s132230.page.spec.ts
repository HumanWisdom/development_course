import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132230Page } from './s132230.page';

describe('S132230Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132230Page;
  let fixture: ComponentFixture<S132230Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132230Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132230Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
