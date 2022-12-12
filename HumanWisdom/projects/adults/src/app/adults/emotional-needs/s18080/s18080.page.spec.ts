import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18080Page } from './s18080.page';

describe('S18080Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18080Page;
  let fixture: ComponentFixture<S18080Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18080Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18080Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
