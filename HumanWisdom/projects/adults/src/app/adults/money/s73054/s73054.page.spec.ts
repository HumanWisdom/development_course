import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73054Page } from './s73054.page';

describe('S73054Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73054Page;
  let fixture: ComponentFixture<S73054Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73054Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73054Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
