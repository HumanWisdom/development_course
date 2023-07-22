import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132191Page } from './s132191.page';

describe('S132191Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132191Page;
  let fixture: ComponentFixture<S132191Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132191Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132191Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
