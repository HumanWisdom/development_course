import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73077Page } from './s73077.page';

describe('S73077Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73077Page;
  let fixture: ComponentFixture<S73077Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73077Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73077Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
