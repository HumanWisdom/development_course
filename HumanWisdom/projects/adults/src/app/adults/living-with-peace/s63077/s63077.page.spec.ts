import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63077Page } from './s63077.page';

describe('S63077Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63077Page;
  let fixture: ComponentFixture<S63077Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63077Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63077Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
