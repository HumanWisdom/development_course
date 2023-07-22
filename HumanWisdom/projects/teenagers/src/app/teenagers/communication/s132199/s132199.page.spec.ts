import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132199Page } from './s132199.page';

describe('S132199Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132199Page;
  let fixture: ComponentFixture<S132199Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132199Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132199Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
