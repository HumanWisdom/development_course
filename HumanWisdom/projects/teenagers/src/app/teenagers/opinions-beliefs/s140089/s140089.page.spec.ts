import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140089Page } from './s140089.page';

describe('S140089Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140089Page;
  let fixture: ComponentFixture<S140089Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140089Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140089Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
