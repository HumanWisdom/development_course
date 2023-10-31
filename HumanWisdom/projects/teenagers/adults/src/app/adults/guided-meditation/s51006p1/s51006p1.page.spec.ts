import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S51006p1Page } from './s51006p1.page';

describe('S51006p1Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S51006p1Page;
  let fixture: ComponentFixture<S51006p1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S51006p1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S51006p1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
