import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132003Page } from './s132003.page';

describe('S132003Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132003Page;
  let fixture: ComponentFixture<S132003Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132003Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132003Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
