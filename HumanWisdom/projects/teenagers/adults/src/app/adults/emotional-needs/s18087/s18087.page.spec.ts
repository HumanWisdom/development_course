import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18087Page } from './s18087.page';

describe('S18087Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18087Page;
  let fixture: ComponentFixture<S18087Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18087Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18087Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
