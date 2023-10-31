import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18088Page } from './s18088.page';

describe('S18088Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18088Page;
  let fixture: ComponentFixture<S18088Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18088Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18088Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
