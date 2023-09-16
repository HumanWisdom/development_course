import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S141080Page } from './s141080.page';

describe('S141080Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S141080Page;
  let fixture: ComponentFixture<S141080Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S141080Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S141080Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
