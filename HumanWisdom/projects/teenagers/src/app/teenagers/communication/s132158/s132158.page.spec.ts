import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132158Page } from './s132158.page';

describe('S132158Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132158Page;
  let fixture: ComponentFixture<S132158Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132158Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132158Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
