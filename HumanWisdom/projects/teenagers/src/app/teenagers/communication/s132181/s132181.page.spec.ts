import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132181Page } from './s132181.page';

describe('S132181Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132181Page;
  let fixture: ComponentFixture<S132181Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132181Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132181Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
