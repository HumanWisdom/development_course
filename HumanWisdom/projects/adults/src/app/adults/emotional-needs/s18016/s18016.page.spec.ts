import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18016Page } from './s18016.page';

describe('S18016Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18016Page;
  let fixture: ComponentFixture<S18016Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18016Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18016Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
