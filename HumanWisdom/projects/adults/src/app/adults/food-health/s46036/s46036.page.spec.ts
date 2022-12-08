import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46036Page } from './s46036.page';

describe('S46036Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46036Page;
  let fixture: ComponentFixture<S46036Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46036Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46036Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
