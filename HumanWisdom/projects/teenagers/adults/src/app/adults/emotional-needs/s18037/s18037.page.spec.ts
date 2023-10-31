import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18037Page } from './s18037.page';

describe('S18037Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18037Page;
  let fixture: ComponentFixture<S18037Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18037Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18037Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
