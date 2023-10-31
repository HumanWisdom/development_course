import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57065Page } from './s57065.page';

describe('S57065Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57065Page;
  let fixture: ComponentFixture<S57065Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57065Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57065Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
