import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18057Page } from './s18057.page';

describe('S18057Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18057Page;
  let fixture: ComponentFixture<S18057Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18057Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18057Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
