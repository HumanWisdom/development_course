import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58007Page } from './s58007.page';

describe('S58007Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58007Page;
  let fixture: ComponentFixture<S58007Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58007Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58007Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
