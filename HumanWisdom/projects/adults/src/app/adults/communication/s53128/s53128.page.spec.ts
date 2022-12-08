import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53128Page } from './s53128.page';

describe('S53128Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53128Page;
  let fixture: ComponentFixture<S53128Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53128Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53128Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
