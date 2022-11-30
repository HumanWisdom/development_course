import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18008Page } from './s18008.page';

describe('S18008Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18008Page;
  let fixture: ComponentFixture<S18008Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18008Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18008Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
