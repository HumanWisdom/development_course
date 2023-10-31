import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61071Page } from './s61071.page';

describe('S61071Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61071Page;
  let fixture: ComponentFixture<S61071Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61071Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61071Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
