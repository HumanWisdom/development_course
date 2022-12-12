import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49008Page } from './s49008.page';

describe('S49008Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49008Page;
  let fixture: ComponentFixture<S49008Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49008Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49008Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
