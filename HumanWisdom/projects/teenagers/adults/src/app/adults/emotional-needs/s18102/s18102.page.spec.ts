import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18102Page } from './s18102.page';

describe('S18102Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18102Page;
  let fixture: ComponentFixture<S18102Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18102Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18102Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
