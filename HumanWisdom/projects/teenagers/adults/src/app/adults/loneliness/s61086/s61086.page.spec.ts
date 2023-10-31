import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61086Page } from './s61086.page';

describe('S61086Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61086Page;
  let fixture: ComponentFixture<S61086Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61086Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61086Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
