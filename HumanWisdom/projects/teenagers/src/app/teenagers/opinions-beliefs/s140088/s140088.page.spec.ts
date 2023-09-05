import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140088Page } from './s140088.page';

describe('S140088Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140088Page;
  let fixture: ComponentFixture<S140088Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140088Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140088Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
