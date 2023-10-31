import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58071Page } from './s58071.page';

describe('S58071Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58071Page;
  let fixture: ComponentFixture<S58071Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58071Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58071Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
