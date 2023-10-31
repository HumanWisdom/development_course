import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73045Page } from './s73045.page';

describe('S73045Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73045Page;
  let fixture: ComponentFixture<S73045Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73045Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73045Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
