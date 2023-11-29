import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132077Page } from './s132077.page';

describe('S132077Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132077Page;
  let fixture: ComponentFixture<S132077Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132077Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132077Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
