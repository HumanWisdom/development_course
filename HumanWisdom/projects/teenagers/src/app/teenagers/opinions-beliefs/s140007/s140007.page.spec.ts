import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140007Page } from './s140007.page';

describe('S140007Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140007Page;
  let fixture: ComponentFixture<S140007Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140007Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140007Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
