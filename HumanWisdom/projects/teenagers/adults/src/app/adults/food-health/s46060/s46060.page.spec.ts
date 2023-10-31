import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46060Page } from './s46060.page';

describe('S46060Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46060Page;
  let fixture: ComponentFixture<S46060Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46060Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46060Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
