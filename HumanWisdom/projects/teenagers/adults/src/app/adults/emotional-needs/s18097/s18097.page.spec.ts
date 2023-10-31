import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18097Page } from './s18097.page';

describe('S18097Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18097Page;
  let fixture: ComponentFixture<S18097Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18097Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18097Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
