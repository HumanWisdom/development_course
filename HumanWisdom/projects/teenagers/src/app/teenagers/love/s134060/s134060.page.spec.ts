import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134060Page } from './s134060.page';

describe('S134060Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134060Page;
  let fixture: ComponentFixture<S134060Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134060Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134060Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
