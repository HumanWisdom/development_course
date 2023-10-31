import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57024Page } from './s57024.page';

describe('S57024Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57024Page;
  let fixture: ComponentFixture<S57024Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57024Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57024Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
