import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132128Page } from './s132128.page';

describe('S132128Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132128Page;
  let fixture: ComponentFixture<S132128Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132128Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132128Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
