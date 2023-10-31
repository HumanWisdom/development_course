import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63065Page } from './s63065.page';

describe('S63065Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63065Page;
  let fixture: ComponentFixture<S63065Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63065Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63065Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
