import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132083Page } from './s132083.page';

describe('S132083Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132083Page;
  let fixture: ComponentFixture<S132083Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132083Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132083Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
