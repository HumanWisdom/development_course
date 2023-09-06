import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140092Page } from './s140092.page';

describe('S140092Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140092Page;
  let fixture: ComponentFixture<S140092Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140092Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140092Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
