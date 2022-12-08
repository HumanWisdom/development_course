import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S51006p2Page } from './s51006p2.page';

describe('S51006p2Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S51006p2Page;
  let fixture: ComponentFixture<S51006p2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S51006p2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S51006p2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
