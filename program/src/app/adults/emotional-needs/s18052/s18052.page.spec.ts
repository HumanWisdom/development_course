import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18052Page } from './s18052.page';

describe('S18052Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18052Page;
  let fixture: ComponentFixture<S18052Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18052Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18052Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
