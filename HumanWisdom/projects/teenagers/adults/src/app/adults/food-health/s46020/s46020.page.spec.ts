import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46020Page } from './s46020.page';

describe('S46020Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46020Page;
  let fixture: ComponentFixture<S46020Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46020Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46020Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
