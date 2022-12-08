import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63063Page } from './s63063.page';

describe('S63063Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63063Page;
  let fixture: ComponentFixture<S63063Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63063Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63063Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
