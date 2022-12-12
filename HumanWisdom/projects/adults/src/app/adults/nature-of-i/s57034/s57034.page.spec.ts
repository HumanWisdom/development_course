import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57034Page } from './s57034.page';

describe('S57034Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57034Page;
  let fixture: ComponentFixture<S57034Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57034Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57034Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
