import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18077Page } from './s18077.page';

describe('S18077Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18077Page;
  let fixture: ComponentFixture<S18077Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18077Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18077Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
