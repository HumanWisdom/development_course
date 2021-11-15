import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45057Page } from './s45057.page';

describe('S45057Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45057Page;
  let fixture: ComponentFixture<S45057Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45057Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45057Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
