import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18009Page } from './s18009.page';

describe('S18009Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18009Page;
  let fixture: ComponentFixture<S18009Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18009Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18009Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
