import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S30007Page } from './s30007.page';

describe('S30007Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S30007Page;
  let fixture: ComponentFixture<S30007Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S30007Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S30007Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
