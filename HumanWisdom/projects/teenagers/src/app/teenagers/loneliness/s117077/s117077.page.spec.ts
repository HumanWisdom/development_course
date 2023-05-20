import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117077Page } from './s117077.page';

describe('S117077Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S117077Page;
  let fixture: ComponentFixture<S117077Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117077Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117077Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
