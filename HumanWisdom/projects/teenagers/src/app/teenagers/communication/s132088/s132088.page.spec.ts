import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132088Page } from './s132088.page';

describe('S132088Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132088Page;
  let fixture: ComponentFixture<S132088Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132088Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132088Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
