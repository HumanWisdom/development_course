import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18020Page } from './s18020.page';

describe('S18020Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18020Page;
  let fixture: ComponentFixture<S18020Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18020Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18020Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
