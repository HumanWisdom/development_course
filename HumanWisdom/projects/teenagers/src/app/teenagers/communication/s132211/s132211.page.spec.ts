import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132211Page } from './s132211.page';

describe('S132211Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132211Page;
  let fixture: ComponentFixture<S132211Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132211Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132211Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
