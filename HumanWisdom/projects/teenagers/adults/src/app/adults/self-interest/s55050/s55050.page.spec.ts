import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S55050Page } from './s55050.page';

describe('S55050Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S55050Page;
  let fixture: ComponentFixture<S55050Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S55050Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S55050Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
