import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73014Page } from './s73014.page';

describe('S73014Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73014Page;
  let fixture: ComponentFixture<S73014Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73014Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73014Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
