import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132081Page } from './s132081.page';

describe('S132081Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132081Page;
  let fixture: ComponentFixture<S132081Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132081Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132081Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
