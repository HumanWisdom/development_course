import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46055Page } from './s46055.page';

describe('S46055Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46055Page;
  let fixture: ComponentFixture<S46055Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46055Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46055Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
