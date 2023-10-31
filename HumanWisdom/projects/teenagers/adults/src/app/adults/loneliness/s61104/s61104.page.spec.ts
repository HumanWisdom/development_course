import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61104Page } from './s61104.page';

describe('S61104Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61104Page;
  let fixture: ComponentFixture<S61104Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61104Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61104Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
