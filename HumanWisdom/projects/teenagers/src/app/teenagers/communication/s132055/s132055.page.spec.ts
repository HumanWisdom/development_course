import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132055Page } from './s132055.page';

describe('S132055Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132055Page;
  let fixture: ComponentFixture<S132055Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132055Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132055Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
