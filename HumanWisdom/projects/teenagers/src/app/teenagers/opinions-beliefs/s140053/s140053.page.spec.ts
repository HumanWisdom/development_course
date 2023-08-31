import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140053Page } from './s140053.page';

describe('S140053Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140053Page;
  let fixture: ComponentFixture<S140053Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140053Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140053Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
