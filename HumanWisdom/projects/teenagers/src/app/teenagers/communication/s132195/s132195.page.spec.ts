import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132195Page } from './s132195.page';

describe('S132195Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132195Page;
  let fixture: ComponentFixture<S132195Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132195Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132195Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
