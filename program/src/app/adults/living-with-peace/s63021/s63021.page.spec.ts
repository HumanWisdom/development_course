import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63021Page } from './s63021.page';

describe('S63021Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63021Page;
  let fixture: ComponentFixture<S63021Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63021Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63021Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
