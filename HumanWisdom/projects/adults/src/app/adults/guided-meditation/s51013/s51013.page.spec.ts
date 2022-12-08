import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S51013Page } from './s51013.page';

describe('S51013Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S51013Page;
  let fixture: ComponentFixture<S51013Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S51013Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S51013Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
