import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132160Page } from './s132160.page';

describe('S132160Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132160Page;
  let fixture: ComponentFixture<S132160Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132160Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132160Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
