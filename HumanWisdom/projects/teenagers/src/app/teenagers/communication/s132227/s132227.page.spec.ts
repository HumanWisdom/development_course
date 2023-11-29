import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132227Page } from './s132227.page';

describe('S132227Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132227Page;
  let fixture: ComponentFixture<S132227Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132227Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132227Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
