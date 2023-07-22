import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132072Page } from './s132072.page';

describe('S132072Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132072Page;
  let fixture: ComponentFixture<S132072Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132072Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132072Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
