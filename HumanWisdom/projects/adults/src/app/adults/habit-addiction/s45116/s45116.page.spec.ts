import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45116Page } from './s45116.page';

describe('S45116Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45116Page;
  let fixture: ComponentFixture<S45116Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45116Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45116Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
