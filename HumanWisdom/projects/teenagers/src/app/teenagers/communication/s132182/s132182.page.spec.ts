import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132182Page } from './s132182.page';

describe('S132182Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132182Page;
  let fixture: ComponentFixture<S132182Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132182Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132182Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
