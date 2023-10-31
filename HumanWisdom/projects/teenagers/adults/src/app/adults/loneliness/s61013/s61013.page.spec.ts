import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61013Page } from './s61013.page';

describe('S61013Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61013Page;
  let fixture: ComponentFixture<S61013Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61013Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61013Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
