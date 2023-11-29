import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132187Page } from './s132187.page';

describe('S132187Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132187Page;
  let fixture: ComponentFixture<S132187Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132187Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132187Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
