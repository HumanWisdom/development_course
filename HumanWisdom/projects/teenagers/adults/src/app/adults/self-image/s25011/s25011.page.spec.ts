import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S25011Page } from './s25011.page';

describe('S25011Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S25011Page;
  let fixture: ComponentFixture<S25011Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S25011Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S25011Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
