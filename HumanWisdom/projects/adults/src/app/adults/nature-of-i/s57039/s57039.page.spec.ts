import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57039Page } from './s57039.page';

describe('S57039Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57039Page;
  let fixture: ComponentFixture<S57039Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57039Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57039Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
