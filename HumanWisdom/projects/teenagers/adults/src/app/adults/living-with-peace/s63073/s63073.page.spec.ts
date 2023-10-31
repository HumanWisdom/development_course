import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63073Page } from './s63073.page';

describe('S63073Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63073Page;
  let fixture: ComponentFixture<S63073Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63073Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63073Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
