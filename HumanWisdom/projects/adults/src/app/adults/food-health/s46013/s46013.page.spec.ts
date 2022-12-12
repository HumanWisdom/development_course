import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46013Page } from './s46013.page';

describe('S46013Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46013Page;
  let fixture: ComponentFixture<S46013Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46013Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46013Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
