import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49049Page } from './s49049.page';

describe('S49049Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49049Page;
  let fixture: ComponentFixture<S49049Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49049Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49049Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
