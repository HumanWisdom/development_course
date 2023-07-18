import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53199Page } from './s132200.page';

describe('S53199Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53199Page;
  let fixture: ComponentFixture<S53199Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53199Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53199Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
