import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46077Page } from './s46077.page';

describe('S46077Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46077Page;
  let fixture: ComponentFixture<S46077Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46077Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46077Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
